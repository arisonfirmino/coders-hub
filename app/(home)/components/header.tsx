import SignInGoogle from "@/app/(home)/components/signin/signin-google";
import SignInGitHub from "@/app/(home)/components/signin/signin-github";

const Header = () => {
  return (
    <header className="flex flex-col gap-5">
      <p className="text-center text-xs text-gray-400">
        © 2024 Arison. All Rights Reserved
      </p>

      <div className="flex flex-col gap-5 md:flex-row">
        <SignInGoogle />
        <SignInGitHub />
      </div>
    </header>
  );
};

export default Header;
