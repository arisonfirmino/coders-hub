import { User } from "@prisma/client";

import UserAvatar from "@/app/(home)/components/header/user-avatar";

interface UserInfoProps {
  user: Pick<User, "name" | "email" | "image">;
}

const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <div className="flex flex-col items-center">
      <UserAvatar user={user} />
      <div className="text-center">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-foreground">{user.email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
