import PostsContext from "@/context/PostsContext";
import { PostData } from "@/utils/types";
import { faEraser, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

export default function PostOptions(post: PostData) {
  const { setPosts, setEditedPost } = useContext(PostsContext);

  function handleEdit() {
    setEditedPost(post);
  }

  function handleDelete() {
    setPosts((prev) => prev.filter((item) => item.id !== post.id));
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
        className="flex cursor-pointer items-center gap-2 rounded-md p-2 pt-1 pb-1 text-red-500 transition-colors ease-out hover:bg-white/20"
        onClick={handleDelete}
      >
        <FontAwesomeIcon icon={faEraser} />
        Delete
      </button>
    </div>
  );
}
