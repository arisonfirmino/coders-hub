import Image from "next/image";

import { UserIcon } from "lucide-react";

import { UserAvatarProps } from "@/app/types";

const UserAvatar = ({ user }: UserAvatarProps) => {
  return (
    <div className="z-10 w-fit rounded-full bg-container p-2.5">
      <div className="relative h-20 w-20 overflow-hidden rounded-full">
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
    </div>
  );
};

export default UserAvatar;
