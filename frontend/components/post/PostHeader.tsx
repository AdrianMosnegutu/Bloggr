import timeSince from "@/utils/timeSince";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostOptions from "./PostOptions";
import { useState } from "react";

interface Props {
  id: string;
  title: string;
  time: Date;
}

export default function PostHeader({ id, title, time }: Props) {
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);

  return (
    <div className="flex w-full items-start gap-12">
      <h2 className="mr-auto max-w-full truncate text-3xl font-bold text-wrap">
        {title}
      </h2>
      <div className="flex shrink-0 items-center gap-4">
        <time
          dateTime={time.toString()}
          className="text-right font-thin text-gray-400 italic"
        >
          {timeSince(time)}
        </time>
        <div
          onClick={() => setOptionsOpen((prev) => !prev)}
          className={`relative flex aspect-square w-9 cursor-pointer items-center justify-center rounded-sm transition-colors hover:bg-white/10 ${optionsOpen && "bg-white/10"}`}
        >
          <FontAwesomeIcon icon={faEllipsisVertical} size="xl" />
          {optionsOpen && <PostOptions id={id} />}
        </div>
      </div>
    </div>
  );
}
