import { getPosts } from "@/app/helpers/getPost";

import Header from "@/app/(home)/components/header/header";
import { Separator } from "@/app/components/ui/separator";
import PostsContainer from "@/app/(home)/components/posts/posts-container";

const Home = async () => {
  const posts = await getPosts();

  return (
    <div className="space-y-5 pb-5">
      <Header />
      <Separator />
      <PostsContainer posts={posts} />
    </div>
  );
};

export default Home;
