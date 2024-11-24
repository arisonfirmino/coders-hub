"use server";

import { db } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

interface CreateNewPostProps {
  userId: string;
  project_name: string;
  description?: string;
  deploy?: string;
  topics?: string[];
}

export const createNewPost = async ({
  userId,
  project_name,
  description,
  deploy,
  topics = [],
}: CreateNewPostProps) => {
  if (!userId || !project_name) {
    throw new Error("Campos não preenchidos.");
  }

  await db.post.create({
    data: {
      userId,
      project_name,
      description,
      deploy,
      topics: {
        create: topics.map((topicName) => ({
          topic_name: topicName,
        })),
      },
    },
  });

  revalidatePath("/");
};

export const deletePost = async ({ postId }: { postId: string }) => {
  if (!postId) {
    throw new Error("Publicação não encontrada.");
  }

  const post = await db.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    throw new Error("Publicação não encontrada.");
  }

  await db.post.delete({
    where: {
      id: post.id,
    },
  });

  revalidatePath("/");
};
