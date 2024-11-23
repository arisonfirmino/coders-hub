import { MessageCircleMoreIcon } from "lucide-react";
import Link from "next/link";

const CommentsLink = () => {
  return (
    <Link href="/comments" className="flex items-center gap-2">
      <MessageCircleMoreIcon size={16} className="text-gray-400" />
      <span>0</span>
    </Link>
  );
};

export default CommentsLink;
