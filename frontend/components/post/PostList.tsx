import { PostType } from "@/types/types";
import Post from "./Post";

interface Props {
  posts: PostType[];
}

export default function PostList({ posts }: Props) {
  return (
    <div className="flex w-4xl flex-col gap-4">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
