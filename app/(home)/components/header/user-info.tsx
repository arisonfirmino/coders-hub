import SignOutButton from "@/app/(home)/components/auth/signout-button";

import { UserInfoProps } from "@/app/types";

const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <div className="flex items-center gap-3">
      <SignOutButton user={user} />
      <div className="space-y-1">
        <h3 className="text-xl font-semibold">{user.name}</h3>
        <p className="text-base text-gray-400">{user.email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
