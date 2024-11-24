import LikeButton from "@/app/components/posts/interactions/like-button";
import CommentsLink from "@/app/components/posts/interactions/comments-link";
import ShareButton from "@/app/components/posts/interactions/share-button";

interface InteractionsProps {
  id: string;
  comments_length: number;
}

const Interactions = ({ id, comments_length }: InteractionsProps) => {
  return (
    <div className="flex items-center gap-5">
      <LikeButton />
      <CommentsLink id={id} comments_length={comments_length} />
      <ShareButton />
    </div>
  );
};

export default Interactions;
