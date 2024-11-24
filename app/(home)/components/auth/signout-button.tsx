"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

import { XCircleIcon } from "lucide-react";

import UserAvatar from "@/app/(home)/components/header/user-avatar";

import { SignOutButtonProps } from "@/app/types";

const SignOutButton = ({ user }: SignOutButtonProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      onClick={() => signOut()}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600"
    >
      {isHover ? <XCircleIcon size={24} /> : <UserAvatar user={user} />}
    </button>
  );
};

export default SignOutButton;
