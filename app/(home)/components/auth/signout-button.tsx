"use client";

import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="flex w-full items-center justify-between rounded-lg bg-red-600 px-2.5 py-1.5 text-sm uppercase"
    >
      Sair
      <LogOutIcon size={14} />
    </button>
  );
};

export default SignOutButton;
