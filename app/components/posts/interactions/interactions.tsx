import LikeButton from "@/app/components/posts/interactions/like-button";
import CommentsLink from "@/app/components/posts/interactions/comments-link";
import ShareButton from "@/app/components/posts/interactions/share-button";

import { InteractionsProps } from "@/app/types";

const Interactions = ({
  id,
  comments_length,
  likes_length,
}: InteractionsProps) => {
  return (
    <div className="flex items-center gap-5">
      <LikeButton postId={id} likes_length={likes_length} />
      <CommentsLink id={id} comments_length={comments_length} />
      <ShareButton />
    </div>
  );
};

export default Interactions;
