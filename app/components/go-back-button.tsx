import Link from "next/link";

import { ArrowLeftIcon } from "lucide-react";

const GoBackButton = () => {
  return (
    <Link
      href="/"
      prefetch
      className="flex w-fit items-center gap-2.5 rounded-xl bg-background px-3 py-1.5 text-sm uppercase"
    >
      <ArrowLeftIcon size={14} />
      Voltar
    </Link>
  );
};

export default GoBackButton;
