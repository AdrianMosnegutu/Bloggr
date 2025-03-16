import RemovableTopic from "@/components/topic/RemovableTopic";

interface Props {
  selectedTopics: string[];
  handleDeselectTopic: (topic: string) => void;
}

export default function SelectedTopicsList({
  selectedTopics,
  handleDeselectTopic,
}: Props) {
  return (
    <ul className="flex max-w-full flex-wrap gap-2">
      {selectedTopics.map((topic, index) => (
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
