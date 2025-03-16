import PostsContext from "@/context/PostsContext";
import { PostType } from "@/utils/types";
import { useContext, useState } from "react";
import ManipulatePostDialog from "./ManipulatePostDialog";
import SelectedTopicsList from "../sidebar/search-panel/SelectedTopicsList";

interface Props {
  post: PostType;
  handleEditPost: () => void;
}

export default function EditPostDialog({ post, handleEditPost }: Props) {
  const [title, setTitle] = useState<string>(post.title);
  const [body, setBody] = useState<string>(post.body);
  const [media, setMedia] = useState<ImageData[]>(post.media);
  const [currentTopic, setCurrentTopic] = useState<string>("");
  const [topics, setTopics] = useState<string[]>(post.topics);

  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("AddPostButton must be used within a Sidebar");
  }

  const { setPosts } = context;

  function handleAddTopic(e: React.KeyboardEvent<HTMLInputElement>) {
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

    setPosts((prev) =>
      prev.map((item) =>
        item.id !== post.id
          ? item
          : {
              id: post.id,
              title,
              body,
              media,
              topics,
              likes: post.likes,
              time: new Date(),
            },
      ),
    );

    handleEditPost();
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
