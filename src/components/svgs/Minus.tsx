import * as React from "react";

export interface IMinusIconProps {
  color: string;
}

export default function MinusIcon({ color }: IMinusIconProps) {
  return (
    <svg
      width="10"
      height="1"
      viewBox="0 0 10 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="10"
        height="1"
        fill={color}
      />
    </svg>
  );
}
