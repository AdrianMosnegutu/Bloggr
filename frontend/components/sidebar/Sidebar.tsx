import { useContext } from "react";
import Button from "../buttons/Button";
import OrderPanel from "./OrderPanel";
import SearchPanel from "./search-panel/SearchPanel";
import PostsContext from "@/context/PostsContext";

export default function Sidebar() {
  const { setCreatingPost } = useContext(PostsContext);

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
