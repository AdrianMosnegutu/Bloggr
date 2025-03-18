import { useContext, useState } from "react";
import RadioButton from "../buttons/RadioButton";
import CheckBoxButton from "../buttons/CheckBoxButton";
import PostsContext from "@/context/PostsContext";
import { PostSortKey } from "@/utils/types";

export default function OrderPanel() {
  const { setPosts } = useContext(PostsContext);

  const [descending, setDescending] = useState<boolean>(false);
  const [value, setValue] = useState<PostSortKey>("time");

  function handlePickCategory(sortKey: PostSortKey) {
    setValue(sortKey);

    setPosts((prev) => {
      const result = prev.toSorted((a, b) =>
        sortKey === "time"
          ? b.time.getTime() - a.time.getTime()
          : a.likes - b.likes,
      );

      return descending ? result.toReversed() : result;
    });
  }

  function handleChangeOrder() {
    setDescending((prev) => !prev);
    setPosts((prev) => prev.toReversed());
  }

  return (
    <form className="bg-custom-gray flex flex-col gap-4 rounded-md p-6">
      <span className="text-2xl font-bold">Order by:</span>
      <div className="flex items-center gap-8">
        <RadioButton
          checked={value === "time"}
          label="time"
          onChange={handlePickCategory}
        />
        <RadioButton
          checked={value === "likes"}
          label="likes"
          onChange={handlePickCategory}
        />
      </div>
      <CheckBoxButton
        checked={descending}
        label="Descending"
        onChange={handleChangeOrder}
      />
    </form>
  );
}
