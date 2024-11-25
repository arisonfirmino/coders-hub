import { db } from "@/app/lib/prisma";

export const getPosts = async () => {
  return db.post.findMany({
    include: {
      user: true,
      topics: true,
      comments: true,
      favorites: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });
};

export const getPost = async ({ id }: { id: string }) => {
  return db.post.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
      topics: true,
      favorites: true,
      comments: {
        orderBy: {
          created_at: "desc",
        },
        include: {
          user: true,
          post: {
            include: {
              user: true,
            },
          },
        },
      },
    },
  });
};
