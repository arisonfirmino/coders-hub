"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { MessageCircleMoreIcon } from "lucide-react";

interface CommentsLinkProps {
  id: string;
  comments_length: number;
}

const CommentsLink = ({ id, comments_length }: CommentsLinkProps) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === `/comments/${id}` ? (
        <div className="flex items-center gap-2">
          <MessageCircleMoreIcon size={16} className="text-gray-400" />
          <span>{comments_length}</span>
        </div>
      ) : (
        <Link href={`/comments/${id}`} className="flex items-center gap-2">
          <MessageCircleMoreIcon size={16} className="text-gray-400" />
          <span>{comments_length}</span>
        </Link>
      )}
    </>
  );
};

export default CommentsLink;
