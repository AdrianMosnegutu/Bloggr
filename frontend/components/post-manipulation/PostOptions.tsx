import PostsContext from "@/context/PostsContext";
import { PostType } from "@/utils/types";
import { useContext } from "react";

interface Props {
  id: string;
}

export default function PostOptions({ id }: Props) {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("AddPostButton must be used within a Sidebar");
  }

  const { posts, setPosts, setEditedPost } = context;

  function handleEdit() {
    setEditedPost(posts.find((post) => post.id === id) as PostType);
  }

  function handleDelete() {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  }

  return (
    <div className="absolute top-full right-full bg-gray-500">
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
