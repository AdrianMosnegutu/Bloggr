import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostInteraction from "./PostInteraction";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { PostData } from "@/utils/types";

export default function PostInteractionList({ likes }: PostData) {
  return (
    <ul>
      <PostInteraction
        count={likes}
        icon={<FontAwesomeIcon size="xl" icon={faHeart} />}
      />
    </ul>
  );
}
