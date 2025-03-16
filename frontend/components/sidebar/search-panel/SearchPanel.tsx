"use client";

import { useState } from "react";
import SelectedTopicsList from "./SelectedTopicsList";
import Button from "@/components/buttons/Button";
import Input from "@/components/form/Input";

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
        <Input
          placeholder="Search posts by topic..."
          variableState={[topic, setTopic]}
          enforceMaxLength
          maxLength={20}
          className="rounded-xl p-4 pt-3 pb-3"
        />
      </form>
      {selectedTopics.length > 0 && (
        <SelectedTopicsList
          selectedTopics={selectedTopics}
          handleDeselectTopic={handleDeselectTopic}
        />
      )}
      <div className="flex w-full items-center gap-4">
        <Button variant="secondary" onClick={() => setSelectedTopics([])}>
          Clear
        </Button>
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
}
