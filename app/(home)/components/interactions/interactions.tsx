import LikeButton from "@/app/(home)/components/interactions/like-button";
import CommentsLink from "@/app/(home)/components/interactions/comments-link";
import ShareButton from "@/app/(home)/components/interactions/share-button";

const Interactions = () => {
  return (
    <div className="flex items-center gap-5">
      <LikeButton />
      <CommentsLink />
      <ShareButton />
    </div>
  );
};

export default Interactions;
