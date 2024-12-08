import Container from "@/app/components/container";
import Header from "@/app/(home)/components/header/header";
import SearchWrapper from "@/app/(home)/components/search/search-wrapper";

import { getPosts } from "@/app/helpers/getPost";

const fetchPosts = async () => {
  const posts = await getPosts();
  return { posts };
};

const Home = async () => {
  const { posts } = await fetchPosts();

  return (
    <Container>
      <Header />
      <div className="pt-5">
        <SearchWrapper posts={posts} />
      </div>
    </Container>
  );
};

export default Home;
