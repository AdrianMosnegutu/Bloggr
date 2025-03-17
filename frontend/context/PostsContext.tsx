import { PostData } from "@/utils/types";
import React, { createContext } from "react";

interface PostsContextType {
  posts: PostData[];
  setPosts: React.Dispatch<React.SetStateAction<PostData[]>>;
  setCreatingPost: React.Dispatch<React.SetStateAction<boolean>>;
  setEditedPost: React.Dispatch<React.SetStateAction<PostData | null>>;
}

const PostsContext = createContext<PostsContextType>({
  posts: [],
  setPosts: () => { },
  setCreatingPost: () => { },
  setEditedPost: () => { }
});

export default PostsContext;
