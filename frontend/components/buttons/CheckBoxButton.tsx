import { capitalizeString } from "@/utils/helperFunctions";
import CheckBox from "./CheckBox";

interface Props {
  checked: boolean;
  label: string;
  onChange: (isCheced: boolean) => void;
}

export default function CheckBoxButton({ checked, label, onChange }: Props) {
  return (
    <div className="group w-fit">
      <input
        className="hidden"
        type="checkbox"
        id={label}
        checked={checked}
        onChange={() => onChange(checked)}
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
