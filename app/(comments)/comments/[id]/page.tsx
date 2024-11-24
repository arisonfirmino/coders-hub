import { redirect } from "next/navigation";

import { getPost } from "@/app/helpers/getPost";

import Container from "@/app/components/container";
import GoBackButton from "@/app/components/go-back-button";

import PostItem from "@/app/components/posts/post-item";
import CommentsList from "@/app/(comments)/components/comments-list";
import CommentForm from "@/app/(comments)/components/comment-form";

const CommentsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const resolvedParams = await params;

  const post = await getPost({ id: resolvedParams.id });

  if (!post) {
    redirect("/");
  }

  return (
    <Container>
      <div className="px-5 pt-5 md:px-0">
        <GoBackButton />
      </div>

      <div className="pt-10">
        <PostItem post={post} />
      </div>

      <div className="px-5 pb-40 pt-10 md:px-0">
        <CommentsList comments={post.comments} />
      </div>

      <CommentForm postId={post.id} name={post.user.name ?? ""} />
    </Container>
  );
};

export default CommentsPage;
