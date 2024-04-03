import { cn } from "@/utils/tailwindUtils";

interface FormLabelProps {
  label: string | null | undefined;
  labelRequired: boolean | undefined;
  htmlFor: string;
  labelClassName: string | undefined;
}

export default function Label({
  label,
  htmlFor,
  labelRequired,
  labelClassName,
}: FormLabelProps) {
  return (
    <>
      {label && (
        <label
          className={cn(
            `text-left block text-black-2 dark:text-white font-medium text-[14px] leading-[20px] mb-[6px] `,
            labelClassName,
            "normal-case",
          )}
          htmlFor={htmlFor}
        >
          {labelRequired && (
            <span className="text-[14px] leading-[20px] font-medium text-red-500">
              *&nbsp;
            </span>
          )}
          {label}
        </label>
      )}
    </>
  );
}
