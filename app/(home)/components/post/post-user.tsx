import PostAvatar from "@/app/(home)/components/post/post-avatar";

const PostUser = () => {
  return (
    <div className="flex items-center gap-3">
      <PostAvatar />
      <div>
        <h3 className="text-base font-medium">Carlos Mendes</h3>
        <p className="text-xs text-gray-400">20 nov, 2024</p>
      </div>
    </div>
  );
};

export default PostUser;
