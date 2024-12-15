import { Skeleton } from "@/app/components/ui/skeleton";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center space-y-3 p-5">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="w-full space-y-2">
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </div>
  );
};

export default LoadingPage;
