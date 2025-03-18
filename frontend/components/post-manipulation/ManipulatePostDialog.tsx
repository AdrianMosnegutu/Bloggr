import {
  MAX_BODY_LENGTH,
  MAX_TITLE_LENGTH,
  MAX_TOPIC_LENGTH,
} from "@/utils/constants";
import { useEffect } from "react";
import Button from "../buttons/Button";
import SelectedTopicsList from "../sidebar/search-panel/SelectedTopicsList";
import { topicRegex } from "@/utils/regex";
import Input from "../form/Input";
import TextArea from "../form/TextArea";

interface Props {
  dialogTitle: string;
  callToActionText: string;
  titleState: [string, React.Dispatch<React.SetStateAction<string>>];
  bodyState: [string, React.Dispatch<React.SetStateAction<string>>];
  topicState: [string, React.Dispatch<React.SetStateAction<string>>];
  mediaState: [ImageData[], React.Dispatch<React.SetStateAction<ImageData[]>>];
  selectedTopicsState: [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>,
  ];
  handleDiscard: () => void;
  handleSubmit: () => void;
}

export default function ManipulatePostDialog({
  dialogTitle,
  callToActionText,
  titleState,
  bodyState,
  mediaState,
  selectedTopicsState,
  topicState,
  handleDiscard,
  handleSubmit,
}: Props) {
  const [media, setMedia] = mediaState;
  const [selectedTopics, setSelectedTopics] = selectedTopicsState;
  const [topic, setTopic] = topicState;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function isTitleValid() {
    const trimmedTitle = titleState[0].trim();
    return trimmedTitle && trimmedTitle.length <= MAX_TITLE_LENGTH;
  }

  function isBodyValid() {
    const trimmedBody = bodyState[0].trim();
    return trimmedBody && trimmedBody.length <= MAX_BODY_LENGTH;
  }

  function isTopicValid() {
    const trimmedTopic = topic.trim();
    return (
      trimmedTopic &&
      trimmedTopic.length <= MAX_TOPIC_LENGTH &&
      topicRegex.test(trimmedTopic)
    );
  }

  function handleAddTopic(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();

      if (isTopicValid() && selectedTopics.every((item) => item !== topic)) {
        setSelectedTopics((prev) => [topic.trim(), ...prev]);
        setTopic("");
      }
    }
  }

  function handleRemoveTopic(topic: string) {
    setSelectedTopics((prev) => prev.filter((item) => item !== topic));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isTitleValid() && isBodyValid()) {
      handleSubmit();
    }
  }

  return (
    <div className="animate-fade fixed top-20 z-30 flex h-screen w-screen items-center justify-center bg-black/30 backdrop-blur-sm">
      <form
        onSubmit={onSubmit}
        className="bg-custom-gray animate-scale flex flex-col gap-8 rounded-lg p-10"
      >
        <h1 className="w-4xl text-4xl font-extrabold">{dialogTitle}</h1>
        <div className="flex w-full flex-col gap-4">
          <Input
            placeholder="Title"
            variableState={titleState}
            maxLength={MAX_TITLE_LENGTH}
            className="rounded-md p-4 text-2xl font-bold"
          />
          <TextArea
            placeholder="Tell us what's on your mind..."
            variableState={bodyState}
            maxLength={MAX_BODY_LENGTH}
          />
          <Input
            placeholder="Add topic..."
            variableState={topicState}
            maxLength={MAX_TOPIC_LENGTH}
            onKeyDown={handleAddTopic}
            className="rounded-md p-4"
          />
        </div>
        {media.length > 0 && <div></div>}
        {selectedTopics.length > 0 && (
          <SelectedTopicsList
            topics={selectedTopics}
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
            {callToActionText}
          </Button>
        </div>
      </form>
    </div>
  );
}
