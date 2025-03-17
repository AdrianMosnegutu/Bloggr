import { PostData } from "@/utils/types";
import Topic from "./Topic";

export default function TopicsList({ topics }: PostData) {
  return (
    <ul className={`${topics.length === 0 ? "hidden" : ""} flex gap-1`}>
      {topics.map((topic, index) => (
        <Topic key={index}>{topic}</Topic>
      ))}
    </ul>
  );
}
