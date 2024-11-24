"use client";

import { useSession } from "next-auth/react";
import PostUser from "@/app/components/post-user";
import AccessProject from "@/app/(home)/components/post/access-project";
import Interactions from "@/app/components/interactions/interactions";
import { Prisma } from "@prisma/client";
import Topics from "@/app/components/topics";
import DeletePost from "@/app/(home)/components/post/delete-post";

interface PostItemProps {
  post: Prisma.PostGetPayload<{
    include: {
      user: true;
      topics: true;
      comments: true;
    };
  }>;
}

const PostItem = ({ post }: PostItemProps) => {
  const { data: session } = useSession();

  return (
    <div className="border-bottom relative space-y-2.5 pb-5">
      <div className="px-5 md:px-0">
        <PostUser post={post} />
      </div>
      <div className="space-y-1.5 px-5 md:px-0">
        <h2 className="text-base font-semibold">{post.project_name}</h2>
        <p className="line-clamp-2 text-sm text-gray-400">{post.description}</p>
      </div>
      <Topics topics={post.topics} />
      <div className="flex items-center gap-2.5 px-5 md:px-0">
        <AccessProject deploy={post.deploy ?? ""} />
        <span className="text-gray-400">|</span>
        <Interactions id={post.id} comments_length={post.comments.length} />
      </div>
      {post.user.email === session?.user.email && <DeletePost id={post.id} />}
    </div>
  );
};

export default PostItem;
