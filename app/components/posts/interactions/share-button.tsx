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
    <button
      onClick={handleShare}
      className="text-gray-400 active:text-background"
    >
      <Redo2Icon size={16} />
    </button>
  );
};

export default ShareButton;
