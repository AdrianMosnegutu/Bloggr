import { useContext, useEffect, useState } from "react";
import RadioButton from "../buttons/RadioButton";
import CheckBoxButton from "../buttons/CheckBoxButton";
import PostsContext from "@/context/PostsContext";

export default function OrderPanel() {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("AddPostButton must be used within a Sidebar");
  }

  const { setPosts } = context;

  const [descending, setDescending] = useState<boolean>(false);
  const [value, setValue] = useState<"likes" | "time">("time");

  function handlePick(which: "likes" | "time") {
    setValue(which);

    setPosts((prev) => {
      const result = prev.toSorted((a, b) =>
        which === "time"
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
    <form className="bg-custom-gray flex flex-col gap-4 rounded-xl p-6">
      <span className="text-2xl font-bold">Order by:</span>
      <div className="flex items-center gap-8">
        <RadioButton
          checked={value === "time"}
          label="time"
          onChange={handlePick}
        />
        <RadioButton
          checked={value === "likes"}
          label="likes"
          onChange={handlePick}
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
