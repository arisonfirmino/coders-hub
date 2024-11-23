import Image from "next/image";

const PostAvatar = () => {
  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full">
      <Image src="/avatar.png" alt="User Avatar" fill />
    </div>
  );
};

export default PostAvatar;
