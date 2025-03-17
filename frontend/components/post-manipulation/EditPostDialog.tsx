import PostsContext from "@/context/PostsContext";
import { PostData } from "@/utils/types";
import { useContext, useState } from "react";
import ManipulatePostDialog from "./ManipulatePostDialog";

export default function EditPostDialog(post: PostData) {
  const { setPosts, setEditedPost } = useContext(PostsContext);

  const titleState = useState<string>(post.title);
  const bodyState = useState<string>(post.body);
  const mediaState = useState<ImageData[]>(post.media);
  const selectedTopicsState = useState<string[]>(post.topics);
  const topicState = useState<string>("");

  function handleSubmit() {
    const title = titleState[0].trim();
    const body = bodyState[0].trim();
    const media = mediaState[0];
    const topics = selectedTopicsState[0];
    const time = new Date();

    if (!title || !body) {
      return;
    }

    const newPost = { ...post, title, body, media, topics, time };

    setPosts((prev) =>
      prev.map((item) => (item.id !== post.id ? item : newPost)),
    );
    setEditedPost(null);
  }

  return (
    <ManipulatePostDialog
      dialogTitle="Edit Post"
      callToActionText="Apply"
      titleState={titleState}
      bodyState={bodyState}
      mediaState={mediaState}
      selectedTopicsState={selectedTopicsState}
      topicState={topicState}
      handleDiscard={() => setEditedPost(null)}
      handleSubmit={handleSubmit}
    />
  );
}
