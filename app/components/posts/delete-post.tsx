"use client";

import { usePathname, useRouter } from "next/navigation";

import DeleteButton from "@/app/components/delete-button";

import { deletePost } from "@/app/actions/post";

const DeletePost = ({ id }: { id: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleDelete = async (postId: string) => {
    await deletePost({ postId });
  };

  const handleSuccess = () => {
    if (pathname !== "/") {
      router.replace("/");
    }
  };

  return (
    <DeleteButton id={id} onDelete={handleDelete} onSuccess={handleSuccess} />
  );
};

export default DeletePost;
