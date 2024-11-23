import PostUser from "@/app/(home)/components/post/post-user";
import Tags from "@/app/(home)/components/post/tags";
import AccessProject from "@/app/(home)/components/post/access-project";
import Interactions from "@/app/(home)/components/interactions/interactions";

const PostItem = () => {
  return (
    <div className="border-bottom space-y-2.5 pb-5">
      <PostUser />
      <div className="space-y-1.5">
        <h2 className="text-base font-semibold">DevTasks</h2>
        <p className="line-clamp-3 text-sm text-gray-400">
          Aplicação de gestão de tarefas focada em equipes de desenvolvimento,
          com integração com GitHub e notificações por Slack.
        </p>
      </div>
      <Tags />
      <div className="flex items-center gap-5">
        <AccessProject />
        <span className="text-gray-400">|</span>
        <Interactions />
      </div>
    </div>
  );
};

export default PostItem;
