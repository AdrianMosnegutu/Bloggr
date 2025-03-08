import { ReactNode } from "react";

interface Props {
  count: bigint;
  icon: ReactNode;
}

export default function PostInteraction({ count, icon }: Props) {
  return (
    <div className="group flex w-fit cursor-pointer items-center gap-2">
      <div className="transition-colors ease-in-out group-hover:text-red-500">
        {icon}
      </div>
      <span>{count}</span>
    </div>
  );
}
