import { ReactNode } from "react";

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

export default function ManipulatePostDialog({ onSubmit, children }: Props) {
  document.body.style.overflow = "hidden";

  return (
    <div className="fixed top-20 z-30 flex h-screen w-screen items-center justify-center bg-black/25 backdrop-blur-xs">
      <form
        onSubmit={onSubmit}
        className="bg-custom-gray flex flex-col gap-8 rounded-lg p-10"
      >
        {children}
      </form>
    </div>
  );
}
