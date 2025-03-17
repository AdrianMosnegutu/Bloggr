import RemovableTopic from "@/components/topic/RemovableTopic";

interface Props {
  topics: string[];
  handleDeselectTopic: (topic: string) => void;
}

export default function SelectedTopicsList({
  topics,
  handleDeselectTopic,
}: Props) {
  return (
    <ul className="flex max-w-full flex-wrap gap-2">
      {topics.map((topic, index) => (
        <RemovableTopic
          key={index}
          onTopicRemoved={() => handleDeselectTopic(topic)}
        >
          {topic}
        </RemovableTopic>
      ))}
    </ul>
  );
}
