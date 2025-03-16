import PostsContext from "@/context/PostsContext";
import { PostType } from "@/utils/types";
import { useContext, useState } from "react";
import ManipulatePostDialog from "./ManipulatePostDialog";

interface Props {
  post: PostType;
}

export default function EditPostDialog({ post }: Props) {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("AddPostButton must be used within a Sidebar");
  }

  const { setPosts, setEditedPost } = context;

  const titleState = useState<string>(post.title);
  const bodyState = useState<string>(post.body);
  const mediaState = useState<ImageData[]>(post.media);
  const topicsState = useState<string[]>(post.topics);
  const currentTopicState = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const title = titleState[0];
    const body = bodyState[0];
    const media = mediaState[0];
    const topics = topicsState[0];

    const newPost = {
      id: post.id,
      title,
      body,
      media,
      topics,
      likes: post.likes,
      time: new Date(),
    };

    setPosts((prev) =>
      prev.map((item) => (item.id !== post.id ? item : newPost)),
    );
    setEditedPost(null);
  }

  return (
    <ManipulatePostDialog
      callToAction="Edit"
      titleState={titleState}
      bodyState={bodyState}
      mediaState={mediaState}
      topicsState={topicsState}
      currentTopicState={currentTopicState}
      handleDiscard={() => setEditedPost(null)}
      handleSubmit={handleSubmit}
    />
  );
}
