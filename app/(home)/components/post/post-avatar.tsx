import Image from "next/image";

interface PostAvatarProps {
  image: string;
  name: string;
}

const PostAvatar = ({ image, name }: PostAvatarProps) => {
  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full">
      <Image src={image} alt={name} fill />
    </div>
  );
};

export default PostAvatar;
