import { Topic } from "@prisma/client";

import TopicItem from "@/app/components/posts/topics/topic-item";

import { useSortedTopics } from "@/app/helpers/useSortedTopics";

interface PostTopicsListProps {
  topics: Topic[];
}

const PostTopicsList = ({ topics }: PostTopicsListProps) => {
  const sortedTopics = useSortedTopics(topics);

  return (
    <ul className="flex gap-2.5 overflow-x-scroll px-5 md:px-0 [&::-webkit-scrollbar]:hidden">
      {sortedTopics.map((topic) => (
        <li key={topic.id}>
          <TopicItem topic={topic} />
        </li>
      ))}
    </ul>
  );
};

export default PostTopicsList;
