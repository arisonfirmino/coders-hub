import PostUser from "@/app/components/post-user";
import DeletePost from "@/app/components/posts/delete-post";

import { PostHeaderProps } from "@/app/types";

const PostHeader = ({ post, isPostOwner }: PostHeaderProps) => {
  return (
    <div className="flex justify-between px-5 md:px-0">
      <PostUser post={post} />
      {isPostOwner && <DeletePost id={post.id} />}
    </div>
  );
};

export default PostHeader;
