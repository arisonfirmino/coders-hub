import { redirect } from "next/navigation";

import { getPost } from "@/app/helpers/getPost";

import Container from "@/app/components/container";
import GoBackButton from "@/app/components/go-back-button";

import PostItem from "@/app/components/posts/post-item";
import CommentsList from "@/app/(comments)/components/comments-list";
import CommentForm from "@/app/(comments)/components/comment-form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import SignInSection from "@/app/(home)/components/auth/signin-section";

const CommentsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const resolvedParams = await params;

  const session = await getServerSession(authOptions);

  const post = await getPost({ id: resolvedParams.id });

  if (!post) {
    redirect("/");
  }

  return (
    <Container>
      {session ? (
        <CommentForm postId={post.id} name={post.user.name ?? ""} />
      ) : (
        <div className="pt-5">
          <SignInSection />
        </div>
      )}

      <div className="px-5 pt-5 md:px-0">
        <GoBackButton />
      </div>

      <div className="pt-10">
        <PostItem post={post} />
      </div>

      <div className={`px-5 pt-10 md:px-0 ${session ? "pb-40" : "pb-5"}`}>
        <CommentsList comments={post.comments} />
      </div>
    </Container>
  );
};

export default CommentsPage;
