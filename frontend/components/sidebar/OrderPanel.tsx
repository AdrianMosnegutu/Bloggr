import { useState } from "react";
import RadioButton from "../buttons/RadioButton";
import CheckBoxButton from "../buttons/CheckBoxButton";

export default function OrderPanel() {
  const [descending, setDescending] = useState<boolean>(false);
  const [value, setValue] = useState<"likes" | "time">("likes");

  function handlePick(which: "likes" | "time") {
    setValue(which);
  }

  return (
    <form className="bg-custom-gray flex flex-col gap-4 rounded-xl p-6">
      <span className="text-2xl font-bold">Order by:</span>
      <div className="flex items-center gap-8">
        <RadioButton
          checked={value === "likes"}
          label="likes"
          onChange={handlePick}
        />
        <RadioButton
          checked={value === "time"}
          label="time"
          onChange={handlePick}
        />
      </div>
      <CheckBoxButton
        checked={descending}
        label="Descending"
        onChange={() => setDescending((prev) => !prev)}
      />
    </form>
  );
}
