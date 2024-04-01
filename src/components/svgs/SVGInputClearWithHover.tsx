import React from "react";
import SVGInputClear from "./SVGInputClear";
import clsx from "clsx";

interface SVGInputClearWithHoverProps {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
}

export default function SVGInputClearWithHover({
  onClick,
  className,
}: SVGInputClearWithHoverProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        `w-6 h-6 flex items-center justify-center group cursor-pointer`,
        className,
      )}
    >
      <SVGInputClear className="fill-[#0000003f] group-hover:fill-[#00000072] " />
    </div>
  );
}
