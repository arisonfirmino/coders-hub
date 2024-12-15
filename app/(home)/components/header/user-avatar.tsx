import { User } from "@prisma/client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";

interface UserAvatarProps {
  user: Pick<User, "name" | "image">;
}

const UserAvatar = ({ user }: UserAvatarProps) => {
  return (
    <div className="z-10 w-fit rounded-full bg-background p-2.5">
      <Avatar className="h-20 w-20">
        <AvatarImage src={user.image ?? ""} />
        <AvatarFallback>{user.name ?? ""}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
