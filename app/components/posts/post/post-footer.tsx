"use client";

import { usePathname } from "next/navigation";

import AccessProject from "@/app/components/posts/access-project";
import Interactions from "@/app/components/posts/interactions/interactions";

import { SquareArrowOutUpRightIcon } from "lucide-react";

import { formatUrl } from "@/app/helpers/formatUrl";

import { PostFooterProps } from "@/app/types";

const PostFooter = ({ post }: PostFooterProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`flex gap-2.5 px-5 md:px-0 ${pathname === "/" ? "flex-row items-center" : "flex-col"}`}
    >
      {pathname === "/" ? (
        <AccessProject deploy={post.deploy ?? ""} />
      ) : (
        post.deploy && (
          <a
            href={post.deploy}
            target="_blank"
            rel="noreferrer"
            className="flex w-fit items-center gap-2.5 hover:text-background hover:underline"
          >
            {formatUrl(post.deploy)}
            <SquareArrowOutUpRightIcon size={12} />
          </a>
        )
      )}
      {pathname === "/" && <span className="text-gray-400">|</span>}
      <Interactions
        id={post.id}
        likes_length={post.favorites.length}
        comments_length={post.comments.length}
      />
    </div>
  );
};

export default PostFooter;
