import { Dispatch, SetStateAction } from "react";
import Button from "../buttons/Button";
import OrderPanel from "./OrderPanel";
import SearchPanel from "./search-panel/SearchPanel";

interface Props {
  setCreatingPost: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ setCreatingPost }: Props) {
  return (
    <div className="sticky top-0 flex w-sm flex-col gap-4">
      <SearchPanel />
      <OrderPanel />
      <Button
        onClick={() => setCreatingPost(true)}
        variant="primary"
        className="w-full"
      >
        Create Post
      </Button>
    </div>
  );
}
