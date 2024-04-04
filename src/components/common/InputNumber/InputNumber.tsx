/* eslint-disable */
import MinusIcon from "@/components/svgs/Minus";
import PlusIcon from "@/components/svgs/Plus";

interface InputNumberProps {
  disabled?: boolean;
  label?: string;
  value?: number;
  onChange?: (quantity: number) => void;
}

export const InputNumber = ({
  disabled = false,
  label,
  value = 0,
  onChange,
}: InputNumberProps) => {
  return (
    <div className={`${disabled ? "opacity-50" : ""} `}>
      {label && <div className="mb-2">{label}</div>}
      <div className="w-[169px] h-10 rounded-lg border-2 text-grey-100 border-grey-100 px-4 flex justify-between items-center">
        <div
          className={`${disabled ? "" : "cursor-pointer"}  w-6 h-6 rounded-sm flex justify-center items-center`}
          onClick={() => onChange?.(value - 1)}
        >
          <MinusIcon />
        </div>
        {value}
        <div
          className={`${disabled ? "" : "cursor-pointer"}  w-6 h-6 rounded-sm flex justify-center items-center`}
          onClick={() => onChange?.(value + 1)}
        >
          <PlusIcon />
        </div>
      </div>
    </div>
  );
};
