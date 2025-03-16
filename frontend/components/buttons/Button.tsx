import { ReactNode } from "react";

interface Props {
  className?: string;
  onClick?: () => void;
  submit?: boolean;
  variant: "primary" | "secondary";
  children: ReactNode;
}

const COMMON_STYLES =
  "w-fit cursor-pointer box-border rounded-xl p-5 pt-2 pb-2 font-bold ease-in-out";

const PRIMARY_STYLE = `${COMMON_STYLES} bg-primary transition-opacity hover:opacity-75`;
const SECONDARY_STYLE = `${COMMON_STYLES} hover:border-2 hover:border-white hover:text-custom-gray border-2 transition-colors hover:bg-white`;

export default function Button({
  children,
  className,
  onClick,
  submit,
  variant,
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
