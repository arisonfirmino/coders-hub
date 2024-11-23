import { Prisma } from "@prisma/client";
import PostAvatar from "@/app/(home)/components/post/post-avatar";
import { formatDate } from "@/app/helpers/formatDate";

interface PostUserProps {
  post: Prisma.PostGetPayload<{
    include: {
      user: true;
    };
  }>;
}

const PostUser = ({ post }: PostUserProps) => {
  return (
    <div className="flex items-center gap-3">
      <PostAvatar image={post.user.image ?? ""} name={post.user.name ?? ""} />
      <div>
        <h3 className="text-base font-medium">{post.user.name}</h3>
        <p className="text-xs text-gray-400">{formatDate(post.created_at)}</p>
      </div>
    </div>
  );
};

export default PostUser;
