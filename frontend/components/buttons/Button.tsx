import { ReactNode } from "react";

interface Props {
  className?: string;
  variant: "primary" | "secondary";
  submit?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const COMMON_STYLES =
  "w-fit cursor-pointer box-border rounded-md p-5 pt-2 pb-2 font-bold ease-in-out ";
const PRIMARY_STYLE =
  COMMON_STYLES + "bg-primary transition-opacity hover:opacity-66";
const SECONDARY_STYLE =
  COMMON_STYLES +
  "hover:border hover:border-white hover:text-custom-gray border transition-colors hover:bg-white";

export default function Button({
  className,
  variant,
  submit,
  onClick,
  children,
}: Props) {
  return (
    <button
      type={submit ? "submit" : "button"}
      onClick={onClick}
      className={`${className} ${variant === "primary" ? PRIMARY_STYLE : SECONDARY_STYLE}`}
    >
      {children}
    </button>
  );
}
