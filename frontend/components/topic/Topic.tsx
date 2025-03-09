import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Topic({ children }: Props) {
  return (
    <li className="flex w-fit items-center gap-2 rounded-sm bg-white/10 p-3 pt-1 pb-1 text-sm">
      {children}
    </li>
  );
}
