/* eslint-disable */
import { Radio as RadioAntd, RadioChangeEvent } from "antd";
import { Dispatch, SetStateAction } from "react";
import "./radio.css";

interface RadioProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  checked?: boolean;
  onChecked?: Dispatch<SetStateAction<boolean>>;
  value?: string;
  onChange?: (e: RadioChangeEvent) => void;
}

export const Radio = ({
  disabled = false,
  name,
  defaultChecked = false,
  checked = false,
  label,
  value,
  onChange,
}: RadioProps) => {
  return (
    <RadioAntd
      value={value}
      onChange={(e) => onChange?.(e)}
      defaultChecked={defaultChecked}
      name={name}
      checked={checked}
      disabled={disabled}
    >
      {label}
    </RadioAntd>
  );
};
