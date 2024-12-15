"use client";

import { useSession } from "next-auth/react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/components/ui/card";
import PostHeader from "@/app/components/posts/post/post-header";
import PostContent from "@/app/components/posts/post/post-content";
import PostTopicsList from "@/app/components/posts/topics/post-topics-list";
import PostFooter from "@/app/components/posts/post/post-footer";
import { Separator } from "@/app/components/ui/separator";

import { PostPayloadWithRelations } from "@/app/types";

interface PostItemProps {
  post: PostPayloadWithRelations;
}

const PostItem = ({ post }: PostItemProps) => {
  const { data: session } = useSession();

  const isPostOwner = session?.user.email === post.user.email;

  return (
    <div className="space-y-5">
      <Card className="space-y-2.5">
        <CardHeader>
          <PostHeader post={post} isPostOwner={isPostOwner} />
        </CardHeader>

        <CardContent className="space-y-2.5">
          <PostContent post={post} />
          <PostTopicsList topics={post.topics} />
        </CardContent>

        <CardFooter>
          <PostFooter post={post} />
        </CardFooter>
      </Card>

      <Separator />
    </div>
  );
};

export default PostItem;
