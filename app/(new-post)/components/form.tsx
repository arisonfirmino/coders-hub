"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import InputForm from "@/app/(new-post)/components/input-form";
import TextareaForm from "@/app/components/textarea-form";
import SubmitButton from "@/app/(new-post)/components/submit-button";
import InputTags from "@/app/(new-post)/components/input-topics";

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
    if (session) {
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
    }
  };

  const handleRemoveTopic = (topic: string) => {
    setTopics((prevTopics) => prevTopics.filter((t) => t !== topic));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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

      <div className="flex flex-col gap-5 px-5 md:flex-row md:px-0">
        <InputForm
          placeholder="Nome do projeto"
          register={{ ...register("projectName") }}
          error={errors.projectName}
        />
        <InputForm
          placeholder="Link para acessar seu projeto"
          register={{ ...register("deploy") }}
          error={errors.deploy}
        />
      </div>
      <div className="px-5 md:px-0">
        <TextareaForm
          placeholder="Descrição do projeto"
          register={{ ...register("description") }}
          error={errors.description}
        />
      </div>

      <div className="px-5 md:px-0">
        <InputTags
          placeholder="Tecnologias usadas"
          onAddTopic={handleAddTopic}
          isLoading={isLoading}
        />
      </div>

      <div className="flex items-center gap-2.5 overflow-x-scroll px-5 md:px-0 [&::-webkit-scrollbar]:hidden">
        {topics.map((topic) => (
          <div
            key={topic}
            className="flex items-center gap-1 rounded-full bg-background px-2.5 py-0.5 text-xs"
          >
            {topic}
            <button
              disabled={isLoading}
              onClick={() => handleRemoveTopic(topic)}
            >
              <XIcon size={12} />
            </button>
          </div>
        ))}
      </div>

      <div className="px-5 md:px-0">
        <SubmitButton isLoading={isLoading} />
      </div>
    </form>
  );
};

export default Form;
