import rawPosts from "@/mock/mock-posts.json";
import { PostData } from "./types";

const mockPosts = (rawPosts as unknown as PostData[]).map((post) => ({
  ...post,
  time: new Date(post.time),
}))

export default mockPosts;
