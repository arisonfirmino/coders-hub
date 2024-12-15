"use client";

import { useSession } from "next-auth/react";

import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import PostUser from "@/app/components/post-user";
import DeleteComment from "@/app/(pages)/comments/[id]/components/delete-comment";
import { Separator } from "@/app/components/ui/separator";

import { CommentPayloadWithRelations } from "@/app/types";

interface CommentItemProps {
  comment: CommentPayloadWithRelations;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const { data: session } = useSession();

  const isCommentOwner = comment.user.email === session?.user.email;

  return (
    <div className="space-y-5">
      <Card className="space-y-1">
        <CardHeader>
          <PostUser post={comment.post} />
          {isCommentOwner && <DeleteComment id={comment.id} />}
        </CardHeader>
        <CardContent className="px-5 md:px-0">
          <p>{comment.comment}</p>
        </CardContent>
      </Card>

      <Separator />
    </div>
  );
};

export default CommentItem;
