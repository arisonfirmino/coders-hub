import { Button } from "@/app/components/ui/button";

import { LoaderCircleIcon, MoveRightIcon } from "lucide-react";

interface SubmitButtonProps {
  isLoading: boolean;
}

const SubmitButton = ({ isLoading }: SubmitButtonProps) => {
  return (
    <Button
      disabled={isLoading}
      type="submit"
      className="w-full justify-between uppercase"
    >
      {isLoading ? "Publicando" : "Publicar"}
      {isLoading ? (
        <LoaderCircleIcon size={14} className="animate-spin" />
      ) : (
        <MoveRightIcon size={14} />
      )}
    </Button>
  );
};

export default SubmitButton;
