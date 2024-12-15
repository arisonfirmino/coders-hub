"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

import { MessageCircleMoreIcon } from "lucide-react";

interface CommentsLinkProps {
  id: string;
  comments_length: number;
}

const CommentsLink = ({ id, comments_length }: CommentsLinkProps) => {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
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
        </TooltipTrigger>
        <TooltipContent>
          <p>Comentários</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CommentsLink;
