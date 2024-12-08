import Link from "next/link";

import { BookMarkedIcon } from "lucide-react";

const NewPostButton = () => {
  return (
    <Link
      href="/new-post"
      prefetch
      className="flex w-full items-center justify-between rounded-lg bg-background px-2.5 py-1.5 text-sm uppercase"
    >
      Nova publicação
      <BookMarkedIcon size={14} />
    </Link>
  );
};

export default NewPostButton;
