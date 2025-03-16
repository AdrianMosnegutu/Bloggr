import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  selected?: boolean;
}

const COMMON_STYLES =
  "flex aspect-square w-5 items-center justify-center rounded-sm";

const SELECTED_STYLE = `${COMMON_STYLES} bg-primary transition-opacity group-hover:opacity-75`;
const NOT_SELECTED_STYLE = `${COMMON_STYLES} transition-colors group-hover:bg-white/20 border`;

export default function CheckBox({ selected }: Props) {
  return (
    <div className={selected ? SELECTED_STYLE : NOT_SELECTED_STYLE}>
      {selected && <FontAwesomeIcon icon={faCheck} size="sm" />}
    </div>
  );
}
