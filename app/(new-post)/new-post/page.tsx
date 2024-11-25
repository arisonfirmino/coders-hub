import Container from "@/app/components/container";
import GoBackButton from "@/app/components/go-back-button";
import Form from "@/app/(new-post)/components/form";

const NewPost = async () => {
  return (
    <Container>
      <div className="px-5 pt-5 md:px-0">
        <GoBackButton />
      </div>

      <div className="px-5 pt-5 md:px-0">
        <p className="text-gray-400">
          Preencha o formulário abaixo e compartilhe seu projeto com a
          comunidade!
        </p>
      </div>

      <div className="pt-5">
        <Form />
      </div>
    </Container>
  );
};

export default NewPost;
