"use server";

import { db } from "@/app/lib/prisma";

export const isPostFavorited = async ({
  userId,
  postId,
}: {
  userId: string;
  postId: string;
}) => {
  const favorite = await db.favorite.findUnique({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });

  return favorite !== null;
};
