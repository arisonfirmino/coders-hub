import { StarIcon } from "lucide-react";

const LikeButton = () => {
  return (
    <button className="flex items-center gap-2">
      <StarIcon size={16} className="text-gray-400" />
      <span className="text-sm">0</span>
    </button>
  );
};

export default LikeButton;
