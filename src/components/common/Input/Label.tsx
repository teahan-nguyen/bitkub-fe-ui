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
            `text-left block text-neutral-1-9 font-medium text-[14px] leading-[20px] mb-[6px] `,
            labelClassName,
            "normal-case",
          )}
          htmlFor={htmlFor}
        >
          {labelRequired && (
            <span className="text-[14px] leading-[20px] font-medium text-sematic-danger">
              *&nbsp;
            </span>
          )}
          {label}
        </label>
      )}
    </>
  );
}
