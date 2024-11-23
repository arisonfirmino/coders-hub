import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { db } from "@/app/lib/prisma";
import SignInSection from "@/app/(home)/components/signin/signin-section";
import UserSection from "@/app/(home)/components/user-section";
import NewPost from "@/app/(home)/components/new-post";

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
      <UserSection user={user} />
      <NewPost />
    </header>
  );
};

export default Header;
