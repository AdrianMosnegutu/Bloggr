import { ReactNode } from "react";
import Topic from "./Topic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onTopicRemoved: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export default function RemovableTopic({ onTopicRemoved, children }: Props) {
  const removeTopicButton = (
    <button
      onClick={onTopicRemoved}
      className="flex aspect-square h-5 cursor-pointer items-center justify-center rounded-sm transition-colors ease-in-out hover:bg-white/25"
    >
      <FontAwesomeIcon icon={faXmark} />
    </button>
  );

  return (
    <Topic>
      {children}
      {removeTopicButton}
    </Topic>
  );
}
