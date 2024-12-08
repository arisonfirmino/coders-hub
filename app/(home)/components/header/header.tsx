import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { db } from "@/app/lib/prisma";

import SignInSection from "@/app/(home)/components/auth/signin-section";
import HeaderBackground from "@/app/(home)/components/header/header-background";
import UserInfo from "@/app/(home)/components/header/user-info";
import NewPostButton from "@/app/(home)/components/header/new-post-button";
import SignOutButton from "../auth/signout-button";

const Header = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <SignInSection />;
  }

  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!user) {
    return <SignInSection />;
  }

  return (
    <header className="border-bottom relative flex flex-col items-center gap-2.5 pb-5 pt-5">
      <HeaderBackground />
      <UserInfo user={user} />
      <div className="flex w-full gap-5 px-5 md:px-0">
        <NewPostButton />
        <SignOutButton />
      </div>
    </header>
  );
};

export default Header;
