export const formatTopics = (topic: string): string => {
  return topic.replace(/[^a-zA-Z0-9]/g, "").replace(/\s+/g, "");
};
