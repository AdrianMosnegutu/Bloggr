import React, { useContext, useState } from "react";
import ManipulatePostDialog from "./ManipulatePostDialog";
import { v4 } from "uuid";
import PostsContext from "@/context/PostsContext";

export default function CreatePostDialog() {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("AddPostButton must be used within a Sidebar");
  }

  const { setPosts, setCreatingPost } = context;

  const titleState = useState<string>("");
  const bodyState = useState<string>("");
  const mediaState = useState<ImageData[]>([]);
  const topicsState = useState<string[]>([]);
  const currentTopicState = useState<string>("");

  function handleSubmit() {
    const title = titleState[0];
    const body = bodyState[0];
    const media = mediaState[0];
    const topics = topicsState[0];

    const trimmedTitle = title.trim();
    const trimmedBody = body.trim();

    if (!trimmedTitle || !trimmedBody) {
      return;
    }

    const newPost = {
      id: v4(),
      title: trimmedTitle,
      body: trimmedBody,
      media,
      topics,
      time: new Date(),
      likes: 0,
    };

    setPosts((prev) => [newPost, ...prev]);
    setCreatingPost(false);
  }

  return (
    <ManipulatePostDialog
      header="Create Post"
      callToAction="Post"
      titleState={titleState}
      bodyState={bodyState}
      mediaState={mediaState}
      topicsState={topicsState}
      currentTopicState={currentTopicState}
      handleDiscard={() => setCreatingPost(false)}
      handleSubmit={handleSubmit}
    />
  );
}
