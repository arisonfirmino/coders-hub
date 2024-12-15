import { Button } from "@/app/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

import { Redo2Icon } from "lucide-react";

const ShareButton = ({ id }: { id: string }) => {
  const handleShare = async () => {
    const shareData = {
      title: "Confira esta publicação!",
      text: `Dê uma olhada nesta publicação`,
      url: `/comments/${id}`,
    };

    if (navigator.share) {
      await navigator.share(shareData);
      console.log("Conteúdo compartilhado com sucesso!");
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="sm" variant="ghost" onClick={handleShare}>
            <Redo2Icon size={16} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Compartilhar</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ShareButton;
