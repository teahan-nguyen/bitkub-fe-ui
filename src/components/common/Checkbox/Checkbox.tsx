/* eslint-disable */
import MinusIcon from "@/components/svgs/Minus";
import TickIcon from "@/components/svgs/Tick";
import React, { useEffect, useState } from "react";

interface CheckboxProps {
  indeterminate?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  checked?: boolean;
  value: string;
  onChange?: () => void;
}

export const Checkbox = ({
  indeterminate = false,
  disabled = false,
  defaultChecked = false,
  checked = false,
  label,
  value,
  onChange,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(
    defaultChecked || checked,
  );

  useEffect(() => {
    onChange && onChange();
  }, [isChecked]);

  const checkedClass = isChecked
    ? `bg-green-500 ${disabled ? "bg-grey-50" : "hover:bg-green-700 cursor-pointer"}`
    : `border border-grey-100 ${disabled ? "bg-grey-50" : "hover:border-grey-400 cursor-pointer"}`;

  return (
    <div className="flex items-center gap-x-2">
      <div
        className={`${checkedClass} w-4 h-4 rounded-sm flex justify-center items-center`}
        onClick={() => disabled || setIsChecked((prev) => !prev)}
      >
        <input
          type="checkbox"
          name={label}
          className="hidden"
          value={value}
          disabled={disabled}
          checked={isChecked}
          onChange={onChange}
          readOnly
        />
        {indeterminate
          ? isChecked && <MinusIcon color={disabled ? "#b6b7b9" : "white"} />
          : isChecked && <TickIcon color={disabled ? "#b6b7b9" : "white"} />}
      </div>
      {label}
    </div>
  );
};
