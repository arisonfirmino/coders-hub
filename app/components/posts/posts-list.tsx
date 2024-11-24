import PostItem from "@/app/components/posts/post-item";

import { PostsListProps } from "@/app/types";

const PostsList = ({ posts }: PostsListProps) => {
  return (
    <ul className="space-y-5">
      {posts.map((post) => (
        <li key={post.id}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
