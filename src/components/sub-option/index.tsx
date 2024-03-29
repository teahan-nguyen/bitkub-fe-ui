"use client";
import Link from "next/link";
import * as React from "react";

export interface ISubOptionProps {
  title: string;
  forwardTo: string;
  redirectText: string;
}

export default function SubOption({
  title,
  forwardTo,
  redirectText,
}: ISubOptionProps) {
  return (
    <div className="flex justify-center text-center gap-2">
      <p className="text-[#595959]">{title}</p>
      <Link
        className="text-green-500 hover:text-green-400 underline cursor-pointer"
        href={forwardTo}
      >
        {redirectText}
      </Link>
    </div>
  );
}
