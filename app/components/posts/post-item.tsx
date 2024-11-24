"use client";

import { useSession } from "next-auth/react";

import PostHeader from "@/app/components/posts/post/post-header";
import PostContent from "@/app/components/posts/post/post-content";
import PostTopicsList from "@/app/components/posts/topics/post-topics-list";
import PostFooter from "@/app/components/posts/post/post-footer";

import { PostItemProps } from "@/app/types";

const PostItem = ({ post }: PostItemProps) => {
  const { data: session } = useSession();

  const isPostOwner = session?.user.email === post.user.email;

  return (
    <div className="border-bottom space-y-2.5 pb-5">
      <PostHeader post={post} isPostOwner={isPostOwner} />
      <PostContent post={post} />
      <PostTopicsList topics={post.topics} />
      <PostFooter post={post} />
    </div>
  );
};

export default PostItem;
