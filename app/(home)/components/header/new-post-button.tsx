import Link from "next/link";

import { BookMarkedIcon } from "lucide-react";

const NewPostButton = () => {
  return (
    <Link
      href="/new-post"
      prefetch
      className="flex h-fit w-full items-center justify-center gap-2.5 rounded-xl bg-background px-5 py-2.5 uppercase md:w-fit"
    >
      <BookMarkedIcon size={16} />
      Nova publicação
    </Link>
  );
};

export default NewPostButton;
