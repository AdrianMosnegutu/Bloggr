import { useContext, useState } from "react";
import SelectedTopicsList from "./SelectedTopicsList";
import Button from "@/components/buttons/Button";
import Input from "@/components/form/Input";
import PostsContext from "@/context/PostsContext";
import mockPosts from "@/mock/mock-posts.json";
import { PostType } from "@/utils/types";

export default function SearchPanel() {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("AddPostButton must be used within a Sidebar");
  }

  const { setPosts } = context;

  const [topic, setTopic] = useState<string>("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  function handleSelectTopic(e: React.FormEvent<HTMLFormElement>) {
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

  function handleClear() {
    setSelectedTopics([]);
  }

  function handleSearch() {
    if (selectedTopics.length == 0) {
      setPosts(mockPosts as unknown as PostType[]);
      return;
    }

    setPosts(
      (mockPosts as unknown as PostType[]).filter((post) =>
        post.topics.some((t) =>
          selectedTopics
            .map((item) => item.toLowerCase())
            .includes(t.toLowerCase()),
        ),
      ),
    );
  }

  return (
    <div className="bg-custom-gray flex flex-col gap-4 rounded-xl p-6">
      <form onSubmit={handleSelectTopic}>
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
        <Button variant="secondary" onClick={handleClear}>
          Clear
        </Button>
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
}
