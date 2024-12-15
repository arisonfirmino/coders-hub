"use client";

import { useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

import { LoaderCircleIcon, Trash2Icon } from "lucide-react";

interface DeleteButtonProps {
  id: string;
  onDelete: (id: string) => Promise<void>;
  onSuccess?: () => void;
}

const DeleteButton = ({ id, onDelete, onSuccess }: DeleteButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteClick = async () => {
    setIsLoading(true);

    await onDelete(id);

    if (onSuccess) onSuccess();

    setIsLoading(false);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            disabled={isLoading}
            onClick={handleDeleteClick}
            className={`flex h-5 w-5 items-center justify-center rounded-full bg-red-600 ${isLoading ? "cursor-not-allowed" : ""} `}
          >
            {isLoading ? (
              <LoaderCircleIcon size={12} className="animate-spin" />
            ) : (
              <Trash2Icon size={12} />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Deletar</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DeleteButton;
