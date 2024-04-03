/* eslint-disable */
import { Checkbox as CheckboxAntd } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import "./checkbox.css";

interface CheckboxProps {
  indeterminate?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  checked?: boolean;
  value?: string;
  onChange?: (e: CheckboxChangeEvent) => void;
}

export const Checkbox = ({
  indeterminate = true,
  disabled = false,
  defaultChecked = false,
  checked = false,
  label,
  value,
  onChange,
}: CheckboxProps) => {
  return (
    <CheckboxAntd
      indeterminate={indeterminate}
      disabled={disabled}
      defaultChecked={defaultChecked}
      checked={checked}
      value={value}
      onChange={(e) => onChange?.(e)}
    >
      {label}
    </CheckboxAntd>
  );
};
