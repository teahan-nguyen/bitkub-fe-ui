import * as React from "react";

export interface ITickIconProps {
  color: string;
}

export default function TickIcon({ color }: ITickIconProps) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.82387 7.39848L4.39961 6.97422L3.97535 7.39848C4.20966 7.6328 4.58956 7.6328 4.82387 7.39848ZM4.39961 6.12569L1.62387 3.34996C1.38956 3.11564 1.00966 3.11564 0.775345 3.34996C0.541031 3.58427 0.541031 3.96417 0.775345 4.19848L3.97535 7.39848L4.39961 6.97422C4.82387 7.39848 4.82384 7.39852 4.82387 7.39848L10.9979 1.22447C11.2322 0.990154 11.2322 0.610255 10.9979 0.375941C10.7636 0.141626 10.3837 0.141626 10.1494 0.375941L4.39961 6.12569Z"
        fill={color}
      />
    </svg>
  );
}
