import * as React from "react";

export interface IEyeIconProps {}

export default function EyeIcon({}: IEyeIconProps) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5.75C4.5 5.75 1.5 12.5 1.5 12.5C1.5 12.5 4.5 19.25 12 19.25C19.5 19.25 22.5 12.5 22.5 12.5C22.5 12.5 19.5 5.75 12 5.75Z"
        stroke="#15161D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16.25C14.0711 16.25 15.75 14.5711 15.75 12.5C15.75 10.4289 14.0711 8.75 12 8.75C9.92893 8.75 8.25 10.4289 8.25 12.5C8.25 14.5711 9.92893 16.25 12 16.25Z"
        stroke="#15161D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
