import { PostData } from "@/utils/types";
import MediaList from "../media/MediaList";
import TopicsList from "../topic/TopicsList";
import PostHeader from "./PostHeader";
import PostInteractionList from "./interaction/PostInteractionList";

export default function Post(post: PostData) {
  return (
    <article className="bg-custom-gray flex flex-col gap-8 rounded-xl p-8">
      <PostHeader {...post} />
      <p className="truncate whitespace-pre-line">{post.body}</p>
      <MediaList {...post} />
      <TopicsList {...post} />
      <PostInteractionList {...post} />
    </article>
  );
}
