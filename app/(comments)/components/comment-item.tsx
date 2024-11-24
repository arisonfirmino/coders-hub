import PostUser from "@/app/components/post-user";
import { Prisma } from "@prisma/client";

interface CommentItemProps {
  comment: Prisma.CommentGetPayload<{
    include: {
      post: {
        include: {
          user: true;
        };
      };
    };
  }>;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <div className="border-bottom space-y-2.5 pb-2.5">
      <PostUser post={comment.post} />
      <p>{comment.comment}</p>
    </div>
  );
};

export default CommentItem;
