import Link from "next/link";

import { Button } from "@/app/components/ui/button";

import { BookMarkedIcon } from "lucide-react";

const NewPostButton = () => {
  return (
    <Link href="/new-post" className="w-full">
      <Button className="w-full justify-between uppercase">
        Nova publicação
        <BookMarkedIcon size={14} />
      </Button>
    </Link>
  );
};

export default NewPostButton;
