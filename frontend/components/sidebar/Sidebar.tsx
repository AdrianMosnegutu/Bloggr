import Button from "../buttons/Button";
import OrderPanel from "./OrderPanel";
import SearchPanel from "./search-panel/SearchPanel";

export default function Sidebar() {
  return (
    <div className="sticky top-0 flex w-sm flex-col gap-4">
      <SearchPanel />
      <OrderPanel />
      <Button variant="primary" className="w-full">
        Create Post
      </Button>
    </div>
  );
}
