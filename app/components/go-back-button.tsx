"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";

const GoBackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleGoBack}
      className="flex items-center gap-2.5 rounded-xl bg-background px-3 py-1.5 text-sm uppercase"
    >
      <ArrowLeftIcon size={14} />
      Voltar
    </button>
  );
};

export default GoBackButton;
