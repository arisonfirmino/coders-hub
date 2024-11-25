"use server";

import { db } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export const addFavorite = async ({
  userId,
  postId,
}: {
  userId: string;
  postId: string;
}) => {
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

  await db.favorite.create({
    data: {
      userId: user.id,
      postId: post.id,
    },
  });

  revalidatePath("/");
};

export const removeFavorite = async ({
  userId,
  postId,
}: {
  userId: string;
  postId: string;
}) => {
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

  const existingFavorite = await db.favorite.findUnique({
    where: {
      userId_postId: {
        userId: user.id,
        postId: post.id,
      },
    },
  });

  if (existingFavorite) {
    await db.favorite.delete({
      where: {
        id: existingFavorite.id,
      },
    });
  }

  revalidatePath("/");
};
