import Interactions from "@/app/components/interactions/interactions";
import PostUser from "@/app/components/post-user";
import Topics from "@/app/components/topics";
import Container from "@/app/components/container";
import GoBackButton from "@/app/components/go-back-button";
import { formatUrl } from "@/app/helpers/formatUrl";
import { db } from "@/app/lib/prisma";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import { redirect } from "next/navigation";
import CommentsList from "@/app/(comments)/components/comments-list";
import CommentForm from "@/app/(comments)/components/comment-form";

interface CommentsPageProps {
  params: {
    id: string;
  };
}

const CommentsPage = async ({ params }: CommentsPageProps) => {
  const { id } = params;

  const post = await db.post.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
      topics: true,
      comments: {
        orderBy: {
          created_at: "desc",
        },
        include: {
          post: {
            include: {
              user: true,
            },
          },
        },
      },
    },
  });

  if (!post) {
    redirect("/");
  }

  return (
    <Container>
      <div className="px-5 pt-5 md:px-0">
        <GoBackButton />
      </div>

      <div className="border-bottom space-y-2.5 pb-5">
        <div className="px-5 md:px-0">
          <PostUser post={post} />
        </div>
        <div className="px-5 md:px-0">
          <p className="text-sm text-gray-400">{post.description}</p>
        </div>
        <Topics topics={post.topics} />
        <div className="w-fit px-5 md:px-0">
          {post.deploy && (
            <a
              href={post.deploy}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 hover:text-background hover:underline"
            >
              {formatUrl(post.deploy)}
              <SquareArrowOutUpRightIcon size={14} />
            </a>
          )}
        </div>
        <div className="px-5 md:px-0">
          <Interactions id={post.id} comments_length={post.comments.length} />
        </div>
      </div>

      <div className="px-5 pb-40 md:px-0">
        <CommentsList comments={post.comments} />
      </div>

      <CommentForm
        userId={post.user.id}
        postId={post.id}
        name={post.user.name ?? ""}
      />
    </Container>
  );
};

export default CommentsPage;
