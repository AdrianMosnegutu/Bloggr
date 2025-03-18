import { useContext, useState } from "react";
import SelectedTopicsList from "./SelectedTopicsList";
import Button from "@/components/buttons/Button";
import Input from "@/components/form/Input";
import PostsContext from "@/context/PostsContext";
import mockPosts from "@/utils/mockPosts";

export default function SearchPanel() {
  const { setPosts } = useContext(PostsContext);

  const [topic, setTopic] = useState<string>("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  function handleSelectTopic(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!topic) {
      return;
    }

    if (selectedTopics.some((selectedTopic) => selectedTopic === topic)) {
      return;
    }

    setSelectedTopics((prev) => [topic, ...prev]);
    setTopic("");
  }

  function handleDeselectTopic(deselectedTopic: string) {
    setSelectedTopics((prev) =>
      prev.filter((topic) => topic !== deselectedTopic),
    );
  }

  function handleClearTopics() {
    setSelectedTopics([]);
  }

  function handleFilterPosts() {
    if (selectedTopics.length == 0) {
      setPosts(mockPosts);
      return;
    }

    setPosts(
      mockPosts.filter((post) =>
        post.topics.some((t) =>
          selectedTopics
            .map((item) => item.toLowerCase())
            .includes(t.toLowerCase()),
        ),
      ),
    );
  }

  return (
    <div className="bg-custom-gray flex flex-col gap-4 rounded-md p-6">
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
          topics={selectedTopics}
          handleDeselectTopic={handleDeselectTopic}
        />
      )}
      <div className="flex w-full items-center gap-4">
        <Button variant="secondary" onClick={handleClearTopics}>
          Clear
        </Button>
        <Button variant="primary" onClick={handleFilterPosts}>
          Filter
        </Button>
      </div>
    </div>
  );
}
