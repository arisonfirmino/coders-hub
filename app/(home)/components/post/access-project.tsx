import { GlobeIcon } from "lucide-react";

const AccessProject = () => {
  return (
    <a
      href="#"
      target="_blank"
      rel="noreferrer"
      className="flex w-full items-center justify-center rounded-xl bg-background px-5 py-2.5 text-sm uppercase md:justify-between"
    >
      Acesse meu projeto
      <GlobeIcon size={14} className="hidden md:flex" />
    </a>
  );
};

export default AccessProject;
