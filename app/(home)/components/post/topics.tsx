import { formatTopics } from "@/app/helpers/formatTopics";
import { Topic } from "@prisma/client";

interface TopicsProps {
  topics: Topic[];
}

const Topics = ({ topics }: TopicsProps) => {
  const sortedTopics = [...topics].sort((a, b) =>
    a.topic_name.toLowerCase().localeCompare(b.topic_name.toLowerCase()),
  );

  return (
    <ul className="flex gap-2.5 overflow-x-scroll px-5 md:px-0 [&::-webkit-scrollbar]:hidden">
      {sortedTopics.map((topic) => (
        <li key={topic.id}>
          <span className="rounded-full bg-background px-2.5 pb-0.5 text-xs lowercase">
            {formatTopics(topic.topic_name)}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Topics;
