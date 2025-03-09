import Topic from "./Topic";

interface Props {
  topics: string[];
}

export default function TopicsList({ topics }: Props) {
  return (
    <ul className={`${topics.length === 0 ? "hidden" : ""} flex gap-1`}>
      {topics.map((topic, index) => (
        <Topic key={index}>{topic}</Topic>
      ))}
    </ul>
  );
}
