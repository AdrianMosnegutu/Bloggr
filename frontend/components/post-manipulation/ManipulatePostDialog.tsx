import {
  MAX_BODY_LENGTH,
  MAX_TITLE_LENGTH,
  MAX_TOPIC_LENGTH,
} from "@/utils/consts";
import { useEffect } from "react";
import Button from "../buttons/Button";
import SelectedTopicsList from "../sidebar/search-panel/SelectedTopicsList";
import { topicRegex } from "@/utils/regex";
import Input from "../form/Input";
import TextArea from "../form/TextArea";

interface Props {
  header: string;
  callToAction: string;
  titleState: [string, React.Dispatch<React.SetStateAction<string>>];
  bodyState: [string, React.Dispatch<React.SetStateAction<string>>];
  currentTopicState: [string, React.Dispatch<React.SetStateAction<string>>];
  mediaState: [ImageData[], React.Dispatch<React.SetStateAction<ImageData[]>>];
  topicsState: [string[], React.Dispatch<React.SetStateAction<string[]>>];
  handleSubmit: () => void;
  handleDiscard: () => void;
}

export default function ManipulatePostDialog({
  header,
  callToAction,
  titleState,
  bodyState,
  mediaState,
  topicsState,
  currentTopicState,
  handleDiscard,
  handleSubmit,
}: Props) {
  const title = titleState[0];
  const body = bodyState[0];
  const [media, setMedia] = mediaState;
  const [topics, setTopics] = topicsState;
  const [currentTopic, setCurrentTopic] = currentTopicState;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function isTitleValid() {
    const trimmedTitle = title.trim();
    return trimmedTitle && trimmedTitle.length <= MAX_TITLE_LENGTH;
  }

  function isBodyValid() {
    const trimmedBody = body.trim();
    return trimmedBody && trimmedBody.length <= MAX_BODY_LENGTH;
  }

  function isTopicValid() {
    const trimmedTopic = currentTopic.trim();
    return (
      trimmedTopic &&
      trimmedTopic.length <= MAX_TOPIC_LENGTH &&
      topicRegex.test(trimmedTopic)
    );
  }

  function handleAddTopic(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();

      if (isTopicValid()) {
        setTopics((prev) => [currentTopic.trim(), ...prev]);
        setCurrentTopic("");
      }
    }
  }

  function handleRemoveTopic(topic: string) {
    setTopics((prev) => prev.filter((item) => item !== topic));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isTitleValid() && isBodyValid()) {
      handleSubmit();
    }
  }

  return (
    <div className="animate-fade fixed top-20 z-30 flex h-screen w-screen items-center justify-center bg-black/25 backdrop-blur-xs">
      <form
        onSubmit={onSubmit}
        className="bg-custom-gray animate-scale flex flex-col gap-8 rounded-lg p-10"
      >
        <h1 className="w-4xl text-4xl font-extrabold">{header}</h1>
        <div className="flex w-full flex-col gap-4">
          <Input
            placeholder="Title"
            variableState={titleState}
            maxLength={MAX_TITLE_LENGTH}
            className="rounded-md p-4 text-3xl font-bold"
          />
          <TextArea
            placeholder="Tell us what's on your mind..."
            variableState={bodyState}
            maxLength={MAX_BODY_LENGTH}
          />
          <Input
            placeholder="Add topic..."
            variableState={currentTopicState}
            maxLength={MAX_TOPIC_LENGTH}
            onKeyDown={handleAddTopic}
            className="rounded-md p-4"
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
          <Button variant="secondary" onClick={handleDiscard}>
            Discard
          </Button>
          <Button submit variant="primary">
            {callToAction}
          </Button>
        </div>
      </form>
    </div>
  );
}
