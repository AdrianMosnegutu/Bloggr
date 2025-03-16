import React, { useState } from "react";
import ManipulatePostDialog from "./ManipulatePostDialog";
import SelectedTopicsList from "../sidebar/search-panel/SelectedTopicsList";
import { PostType } from "@/utils/types";
import { v4 } from "uuid";
import Button from "../buttons/Button";
import { topicRegex } from "@/utils/regex";

interface Props {
  handleCreatePost: (post: PostType) => void;
  handleCancelCreatingPost: () => void;
}

const MAX_TITLE_LENGTH = 25;
const MAX_BODY_LENGTH = 2000;
const MAX_TOPIC_LENGTH = 10;

export default function CreatePostDialog({
  handleCreatePost,
  handleCancelCreatingPost,
}: Props) {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [media, setMedia] = useState<ImageData[]>([]);
  const [currentTopic, setCurrentTopic] = useState<string>("");
  const [topics, setTopics] = useState<string[]>([]);

  function handleAddTopic(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      const topic = currentTopic.trim();

      if (topic && topicRegex.test(topic)) {
        setTopics((prev) => [topic, ...prev]);
        setCurrentTopic("");
      }
    }
  }

  function handleRemoveTopic(topic: string) {
    setTopics((prev) => prev.filter((item) => item !== topic));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedBody = body.trim();

    if (!trimmedTitle || !trimmedBody) {
      return;
    }

    document.body.style.overflow = "auto";
    handleCreatePost({
      id: v4(),
      title: trimmedTitle,
      body: trimmedBody,
      media,
      topics,
      time: new Date(),
      likes: 0,
    });
  }

  return (
    <ManipulatePostDialog onSubmit={handleSubmit}>
      <h1 className="w-4xl text-4xl font-extrabold">Create Post</h1>
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center gap-4 rounded-md border border-gray-400 text-3xl font-bold">
          <input
            className="w-full rounded-md p-4 outline-none"
            type="text"
            placeholder="Title"
            required
            maxLength={MAX_TITLE_LENGTH}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className="m-4 text-base font-normal text-gray-400">
            {title.length}/{MAX_TITLE_LENGTH}
          </span>
        </div>
        <div className="flex h-44 resize-none items-start rounded-md border border-gray-400">
          <textarea
            className="h-full w-full resize-none rounded-md p-4 outline-none"
            placeholder="Tell us what's up..."
            required
            maxLength={MAX_BODY_LENGTH}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <span className="m-4 text-base font-normal text-gray-400">
            {body.length}/{MAX_BODY_LENGTH}
          </span>
        </div>
        <input
          className="rounded-md border border-gray-400 p-4"
          type="text"
          placeholder="Add topic..."
          maxLength={MAX_TOPIC_LENGTH}
          value={currentTopic}
          onChange={(e) => setCurrentTopic(e.target.value)}
          onKeyDown={handleAddTopic}
        />
      </div>
      {media.length > 0 && <div></div>}
      {topics.length > 0 && (
        <SelectedTopicsList
          selectedTopics={topics}
          handleDeselectTopic={handleRemoveTopic}
        />
      )}
      <div className="flex w-full gap-4">
        <Button variant="secondary" className="mr-auto">
          Add Media
        </Button>
        <Button variant="secondary" onClick={handleCancelCreatingPost}>
          Discard
        </Button>
        <Button submit variant="primary">
          Post
        </Button>
      </div>
    </ManipulatePostDialog>
  );
}
