import { formatTopics } from "@/app/helpers/formatTopics";
import { TopicItemProps } from "@/app/types";

const TopicItem = ({ topic }: TopicItemProps) => {
  return (
    <span className="rounded-full bg-background px-2.5 pb-0.5 text-xs lowercase">
      {formatTopics(topic.topic_name)}
    </span>
  );
};

export default TopicItem;
