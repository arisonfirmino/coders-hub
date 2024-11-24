"use client";

import { useState } from "react";
import SubmitButton from "@/app/(new-post)/components/submit-button";
import TextareaForm from "@/app/components/textarea-form";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { createNewComment } from "@/app/actions/comment";

const schema = yup.object({
  comment: yup.string().required("Este campo é obrigatório."),
});

type FormData = yup.InferType<typeof schema>;

interface CommentFormProps {
  userId: string;
  postId: string;
  name: string;
}

const CommentForm = ({ userId, postId, name }: CommentFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    await createNewComment({
      userId: userId,
      postId: postId,
      comment: data.comment,
    });

    reset();
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="fixed bottom-0 w-full max-w-2xl space-y-2.5 bg-container px-5 pb-5 pt-2.5 md:px-0"
    >
      <TextareaForm
        placeholder={`Deixe um comentário para ${name}`}
        register={{ ...register("comment") }}
        error={errors.comment}
      />
      <SubmitButton isLoading={isLoading} />
    </form>
  );
};

export default CommentForm;
