import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

import { getPost } from "@/app/helpers/getPost";

import { redirect } from "next/navigation";

import SignInSection from "@/app/components/signin-section";
import GoBackButton from "@/app/components/go-back-button";
import PostItem from "@/app/components/posts/post-item";
import CommentForm from "@/app/(pages)/comments/[id]/components/comment-form";
import CommentsList from "@/app/(pages)/comments/[id]/components/comments-list";

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
    <div className="space-y-5">
      {session ? (
        <CommentForm postId={post.id} name={post.user.name ?? ""} />
      ) : (
        <SignInSection />
      )}
      <GoBackButton />
      <PostItem post={post} />
      <CommentsList comments={post.comments} />
    </div>
  );
};

export default CommentsPage;
