"use client";

import { useState } from "react";
import { LoaderCircleIcon, Trash2Icon } from "lucide-react";
import { deleteComment } from "@/app/actions/comment";

const DeleteComment = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteClick = async () => {
    setIsLoading(true);

    await deleteComment({ commentId: id });

    setIsLoading(false);
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleDeleteClick}
      className={`absolute -top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 ${isLoading ? "cursor-not-allowed" : ""}`}
    >
      {isLoading ? (
        <LoaderCircleIcon size={12} className="animate-spin" />
      ) : (
        <Trash2Icon size={12} />
      )}
    </button>
  );
};

export default DeleteComment;
