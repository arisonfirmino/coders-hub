import PostItem from "@/app/(home)/components/post/post-item";
import { Prisma } from "@prisma/client";

interface PostsListProps {
  posts: Prisma.PostGetPayload<{
    include: {
      user: true;
      topics: true;
    };
  }>[];
}

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
