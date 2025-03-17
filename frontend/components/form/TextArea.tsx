interface Props {
  variableState: [string, React.Dispatch<React.SetStateAction<string>>];
  placeholder: string;
  maxLength: number;
}

export default function TextArea({
  variableState,
  placeholder,
  maxLength,
}: Props) {
  const [variable, setVariable] = variableState;

  return (
    <div className="flex h-72 items-start rounded-md border border-gray-500 transition-colors ease-out focus-within:border-white">
      <textarea
        className="h-full w-full resize-none rounded-md p-4 outline-none"
        placeholder={placeholder}
        required
        value={variable}
        onChange={(e) => setVariable(e.target.value)}
      />
      <span
        className={`m-4 text-base font-normal text-gray-400 ${variable.length > maxLength && "text-red-400"}`}
      >
        {variable.length}/{maxLength}
      </span>
    </div>
  );
}
