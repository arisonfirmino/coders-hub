import CommentItem from "@/app/(pages)/comments/[id]/components/comment-item";

import { CommentPayloadWithRelations } from "@/app/types";

interface CommentsListProps {
  comments: CommentPayloadWithRelations[];
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
