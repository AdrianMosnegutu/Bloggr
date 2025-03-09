import { ReactNode } from "react";

interface Props {
  className?: string;
  onClick?: () => void;
  submit?: boolean;
  variant: "primary" | "secondary";
  children: ReactNode;
}

const COMMON_STYLES =
  "w-fit cursor-pointer rounded-xl p-5 pt-2 pb-2 font-bold ease-in-out";

const PRIMARY_STYLE = "bg-primary transition-opacity hover:opacity-75";

const SECONDARY_STYLE =
  "hover:text-custom-gray border-2 transition-colors hover:bg-white";

export default function Button({
  children,
  className,
  onClick,
  submit,
  variant,
}: Props) {
  const style = variant === "primary" ? PRIMARY_STYLE : SECONDARY_STYLE;

  return (
    <button
      role={submit ? "submit" : "button"}
      onClick={onClick}
      className={`${className} ${COMMON_STYLES} ${style}`}
    >
      {children}
    </button>
  );
}
