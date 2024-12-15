import Link from "next/link";

import { ArrowLeftIcon } from "lucide-react";

const GoBackButton = () => {
  return (
    <div className="px-5 md:px-0">
      <Link
        href="/"
        className="flex w-fit items-center gap-2.5 rounded-lg bg-primary px-2.5 py-1 text-sm uppercase"
      >
        <ArrowLeftIcon size={14} />
        Voltar
      </Link>
    </div>
  );
};

export default GoBackButton;
