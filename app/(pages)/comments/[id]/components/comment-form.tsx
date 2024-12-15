"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Textarea } from "@/app/components/ui/textarea";
import SubmitButton from "@/app/components/submit-button";

import { createNewComment } from "@/app/actions/comment";

const schema = yup.object({
  comment: yup.string().required("Este campo é obrigatório."),
});

type FormData = yup.InferType<typeof schema>;

interface CommentFormProps {
  postId: string;
  name: string;
}

const CommentForm = ({ postId, name }: CommentFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (!session) return;

    setIsLoading(true);

    await createNewComment({
      userId: session.user.id,
      postId: postId,
      comment: data.comment,
    });

    reset();
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-container fixed bottom-0 z-10 w-full max-w-lg space-y-2.5 px-5 pb-5 pt-2.5 md:px-0"
    >
      <Textarea
        placeholder={`Deixe um comentário para ${name}`}
        {...register("comment")}
        className={`${errors.comment && "border-red-600 ring-red-600 ring-offset-red-600"}`}
      />
      <SubmitButton isLoading={isLoading} />
    </form>
  );
};

export default CommentForm;
