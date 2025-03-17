import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostOptions from "./PostOptions";
import { useState } from "react";
import { timeSince } from "@/utils/helperFunctions";
import { PostData } from "@/utils/types";

export default function PostHeader(post: PostData) {
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);

  return (
    <div className="flex w-full items-start gap-12">
      <h2 className="mr-auto max-w-full truncate text-3xl font-bold text-wrap">
        {post.title}
      </h2>
      <div className="flex shrink-0 items-center gap-4">
        <time
          dateTime={post.time.toString()}
          className="text-right font-thin text-gray-400 italic"
        >
          {timeSince(post.time)}
        </time>
        <div
          onClick={() => setOptionsOpen((prev) => !prev)}
          className={`relative flex aspect-square w-9 cursor-pointer items-center justify-center rounded-sm transition-colors hover:bg-white/10 ${optionsOpen && "bg-white/10"}`}
        >
          <FontAwesomeIcon icon={faEllipsisVertical} size="xl" />
          {optionsOpen && <PostOptions {...post} />}
        </div>
      </div>
    </div>
  );
}
