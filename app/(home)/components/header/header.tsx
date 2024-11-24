import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { db } from "@/app/lib/prisma";

import SignInSection from "@/app/(home)/components/auth/signin-section";
import UserInfo from "@/app/(home)/components/header/user-info";
import NewPostButton from "@/app/(home)/components/header/new-post-button";

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
    <header className="border-bottom flex flex-col items-center gap-5 pb-5 md:flex-row md:justify-between">
      <UserInfo user={user} />
      <NewPostButton />
    </header>
  );
};

export default Header;
