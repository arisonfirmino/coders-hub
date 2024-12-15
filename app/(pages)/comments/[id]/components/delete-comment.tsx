"use client";

import DeleteButton from "@/app/components/delete-button";

import { deleteComment } from "@/app/actions/comment";

const DeleteComment = ({ id }: { id: string }) => {
  const handleDelete = async (commentId: string) => {
    await deleteComment({ commentId });
  };

  return <DeleteButton id={id} onDelete={handleDelete} />;
};

export default DeleteComment;
