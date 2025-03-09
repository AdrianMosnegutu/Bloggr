import capitalizeString from "@/helpers/capitalizeString";
import CheckBox from "./CheckBox";

interface Props {
  checked?: boolean;
  label: "likes" | "time";
  onChange: (which: "likes" | "time") => void;
}


export default function RadioButton({ checked, label, onChange }: Props) {
  return (
    <div className="group w-fit">
      <input
        className="hidden"
        type="radio"
        name="sort"
        id={label}
        checked={checked}
        onChange={() => onChange(label)}
      />
      <label
        className="group flex cursor-pointer items-center gap-2"
        htmlFor={label}
      >
        <CheckBox selected={checked} />
        <span>{capitalizeString(label)}</span>
      </label>
    </div>
  );
}
