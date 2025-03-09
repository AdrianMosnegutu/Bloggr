import MediaList from "../media/MediaList";
import TopicsList from "../topic/TopicsList";
import PostHeader from "./PostHeader";
import PostInteractionList from "./interaction/PostInteractionList";

interface Props {
  title: string;
  body: string;
  time: Date;
  media: ImageData[];
  topics: string[];
  likes: number;
}

export default function Post({
  title,
  body,
  time,
  media,
  topics,
  likes,
}: Props) {
  return (
    <article className="bg-custom-gray flex flex-col gap-8 rounded-xl p-8">
      <PostHeader title={title} time={time} />
      <p>{body}</p>
      <MediaList media={media} />
      <TopicsList topics={topics} />
      <PostInteractionList likes={likes} />
    </article>
  );
}
