import CommentItem from "@/app/(comments)/components/comment-item";

import { CommentsListProps } from "@/app/types";

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
