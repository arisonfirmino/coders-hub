import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

import { GlobeIcon } from "lucide-react";

const AccessProject = ({ deploy }: { deploy: string }) => {
  return deploy ? (
    <Button asChild className="w-full justify-between uppercase">
      <a href={deploy} target="_blank" rel="noreferrer">
        Ver projeto
        <GlobeIcon size={14} />
      </a>
    </Button>
  ) : (
    <Badge className="h-10 w-full cursor-not-allowed justify-between rounded-md px-4 py-2 text-sm font-medium uppercase">
      Ver projeto
      <GlobeIcon size={14} />
    </Badge>
  );
};

export default AccessProject;
