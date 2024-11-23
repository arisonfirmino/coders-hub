import Container from "@/app/components/container";
import Header from "@/app/(home)/components/header";
import Search from "@/app/(home)/components/search";

const Home = () => {
  return (
    <Container>
      <div className="border-bottom py-5">
        <Header />
      </div>
      <Search />
    </Container>
  );
};

export default Home;
