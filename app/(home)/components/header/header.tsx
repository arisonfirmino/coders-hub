import { fetchUserSession } from "@/app/helpers/fetchUserSession";

import SignInSection from "@/app/components/signin-section";
import HeaderBackground from "@/app/(home)/components/header/header-background";
import UserInfo from "@/app/(home)/components/header/user-info";
import NewPostButton from "@/app/(home)/components/header/new-post-button";
import SignOutButton from "@/app/(home)/components/header/auth/signout-button";

const Header = async () => {
  const user = await fetchUserSession();

  if (!user) return <SignInSection />;

  return (
    <header className="relative flex flex-col items-center gap-2.5 pt-5">
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
