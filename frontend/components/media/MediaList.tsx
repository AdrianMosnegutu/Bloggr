import { PostData } from "@/utils/types";

export default function MediaList({ media }: PostData) {
  return (
    <ul className={media.length === 0 ? "hidden" : ""}>
      {media.map((item, index) => (
        <li key={index}>Test</li>
      ))}
    </ul>
  );
}
