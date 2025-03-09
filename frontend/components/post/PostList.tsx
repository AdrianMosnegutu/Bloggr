import { PostType } from "@/types/types";
import Post from "./Post";

interface Props {
  posts: PostType[];
}

export default function PostList({ posts }: Props) {
  return (
    <ul className="flex w-3/4 flex-col gap-4">
      {posts.map((post, index) => (
        <li key={index}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  );
}
