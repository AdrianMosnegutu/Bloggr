import timeSince from "@/utils/timeSince";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostOptions from "../post-manipulation/PostOptions";
import { useState } from "react";

interface Props {
  id: string;
  title: string;
  time: Date;
}

export default function PostHeader({ id, title, time }: Props) {
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center">
      <h2 className="mr-auto text-3xl font-bold">{title}</h2>
      <time
        dateTime={time.toString()}
        className="mr-4 text-right font-thin text-gray-400 italic"
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
  );
}
