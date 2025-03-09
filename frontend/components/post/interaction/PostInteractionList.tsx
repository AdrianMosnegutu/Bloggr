import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostInteraction from "./PostInteraction";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface Props {
  likes: number;
}

export default function PostInteractionList({ likes }: Props) {
  return (
    <ul>
      <PostInteraction
        count={likes}
        icon={<FontAwesomeIcon size="xl" icon={faHeart} />}
      />
    </ul>
  );
}
