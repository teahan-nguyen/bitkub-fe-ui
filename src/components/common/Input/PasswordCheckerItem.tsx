import { cn } from "@/utils/tailwindUtils";

interface PasswordCheckerProps {
  predicate: boolean;
  text: string;
}

export default function PasswordCheckerItem({
  predicate,
  text,
}: PasswordCheckerProps) {
  return (
    <div
      className={cn(
        `text-left w-full text-[12px] leading-[18px]`,
        predicate ? "text-green-400" : "",
      )}
    >{`✓ ${text}`}</div>
  );
}
