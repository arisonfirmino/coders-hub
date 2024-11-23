import { LoaderCircleIcon, MoveRightIcon } from "lucide-react";

interface SubmitButtonProps {
  isLoading: boolean;
}

const SubmitButton = ({ isLoading }: SubmitButtonProps) => {
  return (
    <button
      disabled={isLoading}
      type="submit"
      className={`flex w-full items-center justify-between rounded-xl px-5 py-2.5 text-sm uppercase ${isLoading ? "cursor-not-allowed bg-gray-400" : "bg-background"}`}
    >
      {isLoading ? "Publicando" : "Publicar"}
      {isLoading ? (
        <LoaderCircleIcon size={14} className="animate-spin" />
      ) : (
        <MoveRightIcon size={14} />
      )}
    </button>
  );
};

export default SubmitButton;
