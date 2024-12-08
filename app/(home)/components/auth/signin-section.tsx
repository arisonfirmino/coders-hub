import SignInGoogle from "@/app/(home)/components/auth/signin-google";
import SignInGitHub from "@/app/(home)/components/auth/signin-github";

const SignInSection = () => {
  return (
    <div className="flex flex-col gap-5 pt-5">
      <p className="text-center text-xs text-gray-400">
        © 2024 Arison. All Rights Reserved
      </p>

      <div className="flex flex-col gap-5 md:flex-row">
        <SignInGoogle />
        <SignInGitHub />
      </div>
    </div>
  );
};

export default SignInSection;
