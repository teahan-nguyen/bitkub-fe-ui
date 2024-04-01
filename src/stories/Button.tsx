import StarIcon from "./assets/svgs/Star";
import {
  EButtonType,
  ESize,
} from "/home/vmo/Workspace/nextjs/bitkub-fe-ui/src/enums/index";

interface ButtonProps {
  variant?: "primary" | "secondary" | "warning" | "positive";
  size?: "small" | "medium" | "large";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

const SIZE_MAPPING = {
  [ESize.SMALL]: "w-32 h-8 px-4 py-1.5",
  [ESize.MEDIUM]: "w-[136px] h-10 px-4 py-2",
  [ESize.LARGE]: "w-[136px] h-11 px-4 py-2.5",
};

const COLOR_MAPPING = {
  [EButtonType.PRIMARY]:
    "bg-blue-700 text-white hover:enabled:bg-blue-500 active:bg-blue-900",
  [EButtonType.SECONDARY]:
    "bg-white border border-black hover:enabled:bg-blue-50 active:bg-blue-100",
  [EButtonType.WARNING]:
    "bg-red-600 text-white hover:enabled:bg-red-700 active:bg-red-800",
  [EButtonType.POSITIVE]:
    "bg-green-500 text-white hover:enabled:bg-green-600 active:bg-green-700",
};

export const Button = ({
  variant = EButtonType.PRIMARY,
  size = ESize.MEDIUM,
  label,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${COLOR_MAPPING[variant]} ${SIZE_MAPPING[size]} ${disabled ? "opacity-50" : ""} rounded-lg flex font-semibold justify-between items-center`}
      onClick={onClick}
      disabled={disabled}
    >
      <StarIcon
        size={size === "small" ? "small" : "medium"}
        fill={variant === "secondary" ? "black" : "white"}
      />
      {label}
      <StarIcon
        size={size === "small" ? "small" : "medium"}
        fill={variant === "secondary" ? "black" : "white"}
      />
    </button>
  );
};
