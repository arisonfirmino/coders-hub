"use client";

import { signOut } from "next-auth/react";

import { Button } from "@/app/components/ui/button";

import { LogOutIcon } from "lucide-react";

const SignOutButton = () => {
  return (
    <Button
      onClick={async () => await signOut()}
      className="w-full justify-between bg-red-600 uppercase"
    >
      Sair
      <LogOutIcon size={14} />
    </Button>
  );
};

export default SignOutButton;
