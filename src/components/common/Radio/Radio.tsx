/* eslint-disable */
import React, { useEffect, useState } from "react";

interface RadioProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  checked?: boolean;
  value: string;
  onChange?: () => void;
}

export const Radio = ({
  disabled = false,
  defaultChecked = false,
  checked = false,
  label,
  value,
  onChange,
}: RadioProps) => {
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
        className={`${checkedClass} rounded-full w-4 h-4 flex justify-center items-center`}
        onClick={() => disabled || setIsChecked((prev) => !prev)}
      >
        <input
          type="radio"
          name={label}
          className="hidden"
          value={value}
          disabled={disabled}
          checked={isChecked}
          onChange={onChange}
          readOnly
        />
        {isChecked && (
          <div
            className={`${disabled ? "bg-grey-100" : "bg-white"} w-2 h-2 rounded-full`}
          ></div>
        )}
      </div>
      {label}
    </div>
  );
};
