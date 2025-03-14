"use client";

import React, { useState } from "react";
import ManipulatePostDialog from "./ManipulatePostDialog";
import SelectedTopicsList from "../sidebar/search-panel/SelectedTopicsList";
import { PostType } from "@/types/types";

interface Props {
  handleCreatePost: (post: PostType) => void;
}

export default function CreatePostDialog({ handleCreatePost }: Props) {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [media, setMedia] = useState<ImageData[]>([]);
  const [currentTopic, setCurrentTopic] = useState<string>("");
  const [topics, setTopics] = useState<string[]>([]);

  function handleAddTopic(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log("MUIE");

    if (e.key === "Enter") {
      e.preventDefault();

      if (currentTopic.trim()) {
        setTopics((prev) => [currentTopic.trim(), ...prev]);
        setCurrentTopic("");
      }
    }
  }

  function handleRemoveTopic(topic: string) {
    setTopics((prev) => prev.filter((item) => item !== topic));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleCreatePost({ title, body, media, topics, time: new Date(), likes: 0 });
  }

  return (
    <ManipulatePostDialog onSubmit={handleSubmit}>
      <h1 className="w-4xl text-4xl font-extrabold">Create Post</h1>
      <div className="flex w-full flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Tell us what's up..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add topic..."
          value={currentTopic}
          onChange={(e) => setCurrentTopic(e.target.value)}
          onKeyDown={handleAddTopic}
        />
      </div>
      <div></div>
      <div>
        <SelectedTopicsList
          selectedTopics={topics}
          handleDeselectTopic={handleRemoveTopic}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </ManipulatePostDialog>
  );
}
