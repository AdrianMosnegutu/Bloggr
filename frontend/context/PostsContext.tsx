import { PostType } from "@/utils/types";
import React, { createContext } from "react";

interface PostsContextType {
  posts: PostType[];
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
  setCreatingPost: React.Dispatch<React.SetStateAction<boolean>>;
  setEditedPost: React.Dispatch<React.SetStateAction<PostType | null>>;
}

const PostsContext = createContext<PostsContextType | null>(null);

export default PostsContext;
