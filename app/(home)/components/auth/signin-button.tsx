"use client";

import { SignInButtonProps } from "@/app/types";

const SignInButton = ({ children, handleSignInClick }: SignInButtonProps) => {
  return (
    <button
      onClick={handleSignInClick}
      className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-solid border-gray-400 bg-white px-5 py-2.5 text-black active:bg-gray-400"
    >
      {children}
    </button>
  );
};

export default SignInButton;
