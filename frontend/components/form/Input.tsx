interface Props {
  className?: string;
  variableState: [string, React.Dispatch<React.SetStateAction<string>>];
  placeholder: string;
  maxLength?: number;
  enforceMaxLength?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input({
  className,
  variableState,
  placeholder,
  maxLength,
  enforceMaxLength,
  onKeyDown,
}: Props) {
  const [variable, setVariable] = variableState;

  return (
    <div className="flex items-center rounded-md border border-gray-500 transition-colors ease-out focus-within:border-white">
      <input
        className={`${className} h-full w-full outline-none`}
        type="text"
        placeholder={placeholder}
        maxLength={enforceMaxLength ? maxLength : 99999}
        value={variable}
        onChange={(e) => setVariable(e.target.value)}
        onKeyDown={onKeyDown}
      />
      {maxLength && !enforceMaxLength && (
        <span
          className={`m-4 text-base font-normal text-gray-400 ${variable.length > maxLength && "text-red-400"}`}
        >
          {variable.length}/{maxLength}
        </span>
      )}
    </div>
  );
}
