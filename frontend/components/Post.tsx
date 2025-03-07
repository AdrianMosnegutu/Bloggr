import timeSince from "@/helpers/timeSince";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopicsList from "./TopicsList";

interface Props {
  title: string;
  body: string;
  time: Date;
  media: ImageData[];
  topics: string[];
  likes: bigint;
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
    <article className="bg-custom-gray flex flex-col gap-4 rounded-xl p-8">
      <div className="flex items-center">
        <h2 className="mr-auto text-3xl font-bold">{title}</h2>
        <time
          dateTime={time.toString()}
          className="mr-4 text-right font-thin text-gray-400 italic"
        >
          {timeSince(time)}
        </time>
        <button className="aspect-square w-9 cursor-pointer rounded-sm transition-colors hover:bg-white/10">
          <FontAwesomeIcon icon={faEllipsisVertical} size="xl" />
        </button>
      </div>
      <p>{body}</p>
      <ul className={media.length === 0 ? "hidden" : ""}>
        {media.map((item, index) => (
          <li key={index}>Test</li>
        ))}
      </ul>
      <TopicsList topics={topics} />
      <ul>
        <div>
          <span>{likes}</span>
        </div>
      </ul>
    </article>
  );
}
