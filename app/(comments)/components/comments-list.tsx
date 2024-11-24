import { Prisma } from "@prisma/client";
import CommentItem from "@/app/(comments)/components/comment-item";

interface CommentsListProps {
  comments: Prisma.CommentGetPayload<{
    include: {
      user: true;
      post: {
        include: {
          user: true;
        };
      };
    };
  }>[];
}

const CommentsList = ({ comments }: CommentsListProps) => {
  return (
    <ul className="space-y-5">
      {comments.map((comment) => (
        <li key={comment.id}>
          <CommentItem comment={comment} />
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
