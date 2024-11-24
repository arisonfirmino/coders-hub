import Image from "next/image";

import { UserIcon } from "lucide-react";

import { UserAvatarProps } from "@/app/types";

const UserAvatar = ({ user }: UserAvatarProps) => {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-gray-200 text-gray-400">
      {user.image ? (
        <Image
          src={user.image}
          alt={user.name ?? ""}
          fill
          className="object-cover"
        />
      ) : (
        <UserIcon size={16} />
      )}
    </div>
  );
};

export default UserAvatar;
