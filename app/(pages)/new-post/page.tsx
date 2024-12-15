import GoBackButton from "@/app/components/go-back-button";
import Form from "@/app/(pages)/new-post/components/form";

const NewPost = async () => {
  return (
    <div className="space-y-5 py-5">
      <GoBackButton />
      <p className="px-5 text-foreground">
        Preencha o formulário abaixo e compartilhe seu projeto com a comunidade!
      </p>
      <Form />
    </div>
  );
};

export default NewPost;
