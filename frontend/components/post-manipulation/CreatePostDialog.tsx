import React, { useContext, useState } from "react";
import ManipulatePostDialog from "./ManipulatePostDialog";
import { v4 } from "uuid";
import PostsContext from "@/context/PostsContext";

export default function CreatePostDialog() {
  const { setPosts, setCreatingPost } = useContext(PostsContext);

  const titleState = useState<string>("");
  const bodyState = useState<string>("");
  const mediaState = useState<ImageData[]>([]);
  const selectedTopicsState = useState<string[]>([]);
  const topicState = useState<string>("");

  function handleSubmit() {
    const id = v4();
    const title = titleState[0].trim();
    const body = bodyState[0].trim();
    const media = mediaState[0];
    const topics = selectedTopicsState[0];
    const time = new Date();
    const likes = 0;

    if (!title || !body) {
      return;
    }

    const newPost = { id, title, body, media, topics, time, likes };

    setPosts((prev) => [newPost, ...prev]);
    setCreatingPost(false);
  }

  return (
    <ManipulatePostDialog
      dialogTitle="Create Post"
      callToActionText="Post"
      titleState={titleState}
      bodyState={bodyState}
      mediaState={mediaState}
      selectedTopicsState={selectedTopicsState}
      topicState={topicState}
      handleDiscard={() => setCreatingPost(false)}
      handleSubmit={handleSubmit}
    />
  );
}
