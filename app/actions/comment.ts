"use server";

import { db } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

interface CreateNewCommentProps {
  userId: string;
  postId: string;
  comment: string;
}

export const createNewComment = async ({
  userId,
  postId,
  comment,
}: CreateNewCommentProps) => {
  if (!userId) {
    throw new Error("Usuário não encontrado.");
  }

  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("Usuário não encontrado.");
  }

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

  if (!comment) {
    throw new Error("Campos não preenchidos.");
  }

  await db.comment.create({
    data: {
      userId: user.id,
      postId: post.id,
      comment: comment,
    },
  });

  revalidatePath("/");
};
