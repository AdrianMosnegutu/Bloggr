"use client";

import { useState } from "react";
import SelectedTopicsList from "./SelectedTopicsList";
import Button from "@/components/buttons/Button";

export default function SearchPanel() {
  const [topic, setTopic] = useState<string>("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  function handleAddTopic(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !topic ||
      selectedTopics.some((selectedTopic) => selectedTopic === topic)
    ) {
      return;
    }

    setSelectedTopics((prev) => [topic, ...prev]);
    setTopic("");
  }

  function handleDeselectTopic(removedTopic: string) {
    setSelectedTopics((prev) => prev.filter((topic) => topic !== removedTopic));
  }

  function handleSearch() {}

  return (
    <div className="bg-custom-gray flex flex-col gap-4 rounded-xl p-6">
      <form onSubmit={handleAddTopic}>
        <input
          title="Topic"
          type="text"
          placeholder="Search posts by topic..."
          maxLength={20}
          pattern="[0-9a-zA-Z_]+"
          value={topic}
          required
          onChange={(e) => setTopic(e.target.value)}
          className="w-full rounded-xl border border-gray-400 p-4 pt-2 pb-2"
        />
      </form>
      {selectedTopics.length > 0 && (
        <SelectedTopicsList
          selectedTopics={selectedTopics}
          handleDeselectTopic={handleDeselectTopic}
        />
      )}
      <Button variant="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}
