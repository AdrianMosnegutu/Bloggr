import { PostType } from "@/utils/types";
import MediaList from "../media/MediaList";
import TopicsList from "../topic/TopicsList";
import PostHeader from "./PostHeader";
import PostInteractionList from "./interaction/PostInteractionList";

export default function Post({
  id,
  title,
  body,
  time,
  media,
  topics,
  likes,
}: PostType) {
  return (
    <article className="bg-custom-gray flex flex-col gap-8 rounded-xl p-8">
      <PostHeader id={id} title={title} time={time} />
      <p className="truncate whitespace-pre-line">{body}</p>
      <MediaList media={media} />
      <TopicsList topics={topics} />
      <PostInteractionList likes={likes} />
    </article>
  );
}
