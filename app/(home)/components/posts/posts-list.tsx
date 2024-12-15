import PostItem from "@/app/components/posts/post-item";

import { PostPayloadWithRelations } from "@/app/types";

interface PostProps {
  posts: PostPayloadWithRelations[];
}

const PostsList = ({ posts }: PostProps) => {
  return (
    <ul className="space-y-5">
      {posts.map((post) => (
        <li key={post.id} className="space-y-5">
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
