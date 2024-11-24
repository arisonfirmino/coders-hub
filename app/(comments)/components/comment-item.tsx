"use client";

import { useSession } from "next-auth/react";

import PostUser from "@/app/components/post-user";
import DeleteComment from "@/app/(comments)/components/delete-comment";

import { CommentItemProps } from "@/app/types";

const CommentItem = ({ comment }: CommentItemProps) => {
  const { data: session } = useSession();

  const isCommentwner = comment.user.email === session?.user.email;

  return (
    <div className="border-bottom relative space-y-2.5 pb-2.5">
      <div className="flex justify-between">
        <PostUser post={comment.post} />
        {isCommentwner && <DeleteComment id={comment.id} />}
      </div>
      <p>{comment.comment}</p>
    </div>
  );
};

export default CommentItem;
