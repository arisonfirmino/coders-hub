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
