interface Props {
  topicName: string;
}

export default function Topic({ topicName }: Props) {
  return (
    <li className="w-fit rounded-sm bg-white/10 p-3 pt-1 pb-1">
      <span className="text-sm">{topicName}</span>
    </li>
  );
}
