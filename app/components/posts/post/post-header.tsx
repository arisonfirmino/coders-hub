import PostUser from "@/app/components/post-user";
import DeletePost from "@/app/components/posts/delete-post";
import { PostPayloadWithRelations } from "@/app/types";

interface PostHeaderProps {
  post: PostPayloadWithRelations;
  isPostOwner: boolean;
}

const PostHeader = ({ post, isPostOwner }: PostHeaderProps) => {
  return (
    <>
      <PostUser post={post} />
      {isPostOwner && <DeletePost id={post.id} />}
    </>
  );
};

export default PostHeader;
