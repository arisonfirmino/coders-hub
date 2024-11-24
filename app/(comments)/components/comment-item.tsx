"use client";

import { useSession } from "next-auth/react";
import PostUser from "@/app/components/post-user";
import { Prisma } from "@prisma/client";
import DeleteComment from "@/app/(comments)/components/delete-comment";

interface CommentItemProps {
  comment: Prisma.CommentGetPayload<{
    include: {
      post: {
        include: {
          user: true;
        };
      };
    };
  }>;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const { data: session } = useSession();

  return (
    <div className="border-bottom relative space-y-2.5 pb-2.5">
      <PostUser post={comment.post} />
      <p>{comment.comment}</p>

      {comment.post.user.email === session?.user.email && (
        <DeleteComment id={comment.id} />
      )}
    </div>
  );
};

export default CommentItem;
