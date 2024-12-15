"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import InputTags from "@/app/(pages)/new-post/components/input-topics";
import SubmitButton from "@/app/components/submit-button";

import { XIcon } from "lucide-react";

import { createNewPost } from "@/app/actions/post";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  projectName: yup.string().required("O nome do projeto é obrigatório."),
  description: yup.string(),
  deploy: yup.string().url("Insira uma URL válida.").nullable(),
});

type FormData = yup.InferType<typeof schema>;

const Form = () => {
  const [topics, setTopics] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { data: session } = useSession();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAddTopic = (newTopic: string) => {
    setTopics((prevTopics) => {
      const filteredTopics = prevTopics.filter(
        (topic) => topic.toLowerCase() !== newTopic.toLowerCase(),
      );
      return [...filteredTopics, newTopic];
    });
  };

  const onSubmit = async (data: FormData) => {
    if (!session) return;

    setIsLoading(true);

    await createNewPost({
      userId: session.user.id,
      project_name: data.projectName,
      description: data.description,
      deploy: String(data.deploy),
      topics: topics,
    });

    reset();
    setTopics([]);
    setIsLoading(false);
    router.replace("/");
  };

  const handleRemoveTopic = (topic: string) => {
    setTopics((prevTopics) => prevTopics.filter((t) => t !== topic));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 px-5 md:px-0">
      {errors.projectName && (
        <p className="text-center text-sm text-red-600">
          {errors.projectName.message}
        </p>
      )}
      {errors.deploy && (
        <p className="text-center text-sm text-red-600">
          {errors.deploy.message}
        </p>
      )}

      <div className="flex flex-col gap-5 md:flex-row">
        <Input
          placeholder="Nome do projeto"
          {...register("projectName")}
          className={`${errors.projectName && "border-red-600 ring-red-600 ring-offset-red-600"}`}
        />
        <Input
          placeholder="Link para acessar seu projeto"
          {...register("deploy")}
          className={`${errors.deploy && "border-red-600 ring-red-600 ring-offset-red-600"}`}
        />
      </div>

      <Textarea
        placeholder="Descrição do projeto"
        {...register("description")}
        className={`${errors.description && "border-red-600 ring-red-600 ring-offset-red-600"}`}
      />

      <InputTags
        placeholder="Tecnologias usadas"
        onAddTopic={handleAddTopic}
        isLoading={isLoading}
      />

      {topics.length > 0 && (
        <div className="flex items-center gap-2.5 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {topics.map((topic) => (
            <Badge key={topic}>
              {topic}
              <Button
                size="sm"
                variant="ghost"
                disabled={isLoading}
                onClick={() => handleRemoveTopic(topic)}
              >
                <XIcon size={12} />
              </Button>
            </Badge>
          ))}
        </div>
      )}

      <SubmitButton isLoading={isLoading} />
    </form>
  );
};

export default Form;
