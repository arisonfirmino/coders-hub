import PostUser from "@/app/components/post-user";
import AccessProject from "@/app/(home)/components/post/access-project";
import Interactions from "@/app/components/interactions/interactions";
import { Prisma } from "@prisma/client";
import Topics from "@/app/components/topics";

interface PostItemProps {
  post: Prisma.PostGetPayload<{
    include: {
      user: true;
      topics: true;
      comments: true;
    };
  }>;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className="border-bottom space-y-2.5 pb-5">
      <div className="px-5 md:px-0">
        <PostUser post={post} />
      </div>
      <div className="space-y-1.5 px-5 md:px-0">
        <h2 className="text-base font-semibold">{post.project_name}</h2>
        <p className="line-clamp-2 text-sm text-gray-400">{post.description}</p>
      </div>
      <Topics topics={post.topics} />
      <div className="flex items-center gap-2.5 px-5 md:px-0">
        <AccessProject deploy={post.deploy ?? ""} />
        <span className="text-gray-400">|</span>
        <Interactions id={post.id} comments_length={post.comments.length} />
      </div>
    </div>
  );
};

export default PostItem;
