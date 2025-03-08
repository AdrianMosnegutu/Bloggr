interface Props {
  media: ImageData[];
}

export default function MediaList({ media }: Props) {
  return (
    <ul className={media.length === 0 ? "hidden" : ""}>
      {media.map((item, index) => (
        <li key={index}>Test</li>
      ))}
    </ul>
  );
}
