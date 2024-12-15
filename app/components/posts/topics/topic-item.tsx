import { Badge } from "@/app/components/ui/badge";

import { formatTopics } from "@/app/helpers/formatTopics";
import { Topic } from "@prisma/client";

interface TopicItemProps {
  topic: Pick<Topic, "topic_name">;
}

const TopicItem = ({ topic }: TopicItemProps) => {
  return <Badge>{formatTopics(topic.topic_name)}</Badge>;
};

export default TopicItem;
