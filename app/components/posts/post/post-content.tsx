import { Post } from "@prisma/client";

interface PostContentProps {
  post: Pick<Post, "project_name" | "description">;
}

const PostContent = ({ post }: PostContentProps) => {
  return (
    <div className="space-y-0.5 px-5 md:px-0">
      <h2 className="text-base font-semibold">{post.project_name}</h2>
      <p className="line-clamp-2 text-sm text-gray-400">{post.description}</p>
    </div>
  );
};

export default PostContent;
