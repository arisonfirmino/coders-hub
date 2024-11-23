import { GlobeIcon } from "lucide-react";

const AccessProject = ({ deploy }: { deploy: string }) => {
  return (
    <a
      href={deploy}
      target="_blank"
      rel="noreferrer"
      className="flex w-full items-center justify-center text-nowrap rounded-xl bg-background py-2.5 text-sm uppercase md:justify-between md:px-5"
    >
      Ver projeto
      <GlobeIcon size={14} className="hidden md:flex" />
    </a>
  );
};

export default AccessProject;
