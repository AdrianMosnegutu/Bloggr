import { PostType } from "@/types/types";
import { createContext } from "react";

interface PostsContextType {
  posts: PostType[];
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
  setEditedPost: React.Dispatch<React.SetStateAction<PostType | null>>;
}

const PostsContext = createContext<PostsContextType | null>(null);

export default PostsContext;
