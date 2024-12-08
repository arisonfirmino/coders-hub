import UserAvatar from "@/app/(home)/components/header/user-avatar";

import { UserInfoProps } from "@/app/types";

const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <div className="flex flex-col items-center">
      <UserAvatar user={user} />
      <div className="text-center">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-400">{user.email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
