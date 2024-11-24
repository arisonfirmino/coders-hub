import Container from "@/app/components/container";
import Header from "@/app/(home)/components/header";
import Search from "@/app/(home)/components/search";
import PostsList from "@/app/(home)/components/post/posts-list";
import { db } from "@/app/lib/prisma";

const fetch = async () => {
  const getPosts = db.post.findMany({
    include: {
      user: true,
      topics: true,
      comments: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  const [posts] = await Promise.all([getPosts]);

  return { posts };
};

const Home = async () => {
  const { posts } = await fetch();

  return (
    <Container>
      <div className="px-5 pt-5 md:px-0">
        <Header />
      </div>
      <div className="px-5 md:px-0">
        <Search />
      </div>
      <div className="pb-5">
        <PostsList posts={posts} />
      </div>
    </Container>
  );
};

export default Home;
