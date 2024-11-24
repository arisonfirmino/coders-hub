import { Topic } from "@prisma/client";

export const useSortedTopics = (topics: Topic[]) =>
  [...topics].sort((a, b) =>
    a.topic_name.toLowerCase().localeCompare(b.topic_name.toLowerCase()),
  );
