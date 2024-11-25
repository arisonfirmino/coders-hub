"use client";

import { useEffect, useState } from "react";

import { LoaderCircleIcon, StarIcon } from "lucide-react";

import { addFavorite, removeFavorite } from "@/app/actions/favorite";
import { useSession } from "next-auth/react";
import { isPostFavorited } from "@/app/helpers/isPostFavorited";

const LikeButton = ({
  postId,
  likes_length,
}: {
  postId: string;
  likes_length: number;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const { data: session } = useSession();

  useEffect(() => {
    const checkIfFavorited = async () => {
      if (session) {
        const favorited = await isPostFavorited({
          userId: session?.user.id,
          postId,
        });

        setIsFavorited(favorited);
      }
    };

    checkIfFavorited();
  }, [postId, session]);

  const handleAddFavoriteClick = async () => {
    if (session) {
      setIsLoading(true);

      if (isFavorited) {
        await removeFavorite({ userId: session.user.id, postId: postId });
        setIsFavorited(false);
      } else {
        await addFavorite({ userId: session.user.id, postId: postId });
        setIsFavorited(true);
      }

      setIsLoading(false);
    }
  };

  return (
    <button
      disabled={isLoading || !session}
      onClick={handleAddFavoriteClick}
      className={`flex items-center gap-2 ${isLoading || !session ? "cursor-not-allowed" : ""}`}
    >
      {isLoading ? (
        <LoaderCircleIcon size={16} className="animate-spin text-gray-400" />
      ) : (
        <StarIcon
          size={16}
          className={
            isFavorited ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
          }
        />
      )}
      <span className="text-sm">{likes_length}</span>
    </button>
  );
};

export default LikeButton;
