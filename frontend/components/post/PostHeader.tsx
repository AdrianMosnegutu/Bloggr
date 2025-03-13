import timeSince from "@/utils/timeSince";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  title: string;
  time: Date;
}

export default function PostHeader({ title, time }: Props) {
  return (
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
  );
}
