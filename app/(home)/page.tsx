import Container from "@/app/components/container";
import Header from "@/app/(home)/components/header/header";
import Search from "@/app/(home)/components/search";
import PostsList from "@/app/components/posts/posts-list";

import { getPosts } from "@/app/helpers/getPost";

const fetchPosts = async () => {
  const posts = await getPosts();
  return { posts };
};

const Home = async () => {
  const { posts } = await fetchPosts();

  return (
    <Container>
      <div className="px-5 pt-5 md:px-0">
        <Header />
      </div>
      <div className="px-5 pt-5 md:px-0">
        <Search />
      </div>
      <div className="pb-5 pt-10">
        <PostsList posts={posts} />
      </div>
    </Container>
  );
};

export default Home;
