import { GlobeIcon } from "lucide-react";

const AccessProject = ({ deploy }: { deploy: string }) => {
  return (
    <a
      href={deploy}
      target="_blank"
      rel="noreferrer"
      className="flex w-full items-center justify-between text-nowrap rounded-xl bg-background px-5 py-2.5 text-sm uppercase"
    >
      Ver projeto
      <GlobeIcon size={14} />
    </a>
  );
};

export default AccessProject;
