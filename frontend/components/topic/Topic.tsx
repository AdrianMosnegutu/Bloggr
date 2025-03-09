import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Topic({ children }: Props) {
  return (
    <li className="w-fit rounded-sm bg-white/10 p-3 pt-1 pb-1">
      <span className="text-sm">{children}</span>
    </li>
  );
}
