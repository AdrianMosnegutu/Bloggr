import PostsContext from "@/context/PostsContext";
import { PostType } from "@/utils/types";
import { faEraser, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div className="absolute top-full right-1/4 flex flex-col items-start gap-1 rounded-md bg-[#4A4A4A] p-2">
      <button
        className="flex w-full cursor-pointer items-center gap-2 rounded-md p-2 pt-1 pb-1 transition-colors ease-out hover:bg-white/20"
        onClick={handleEdit}
      >
        <FontAwesomeIcon icon={faPen} />
        Edit
      </button>
      <button
        className="flex cursor-pointer items-center gap-2 rounded-md p-2 pt-1 pb-1 text-red-400 transition-colors ease-out hover:bg-white/20"
        onClick={handleDelete}
      >
        <FontAwesomeIcon icon={faEraser} />
        Delete
      </button>
    </div>
  );
}
