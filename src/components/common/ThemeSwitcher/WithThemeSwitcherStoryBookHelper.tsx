import { ReactNode } from "react";
import { ThemeSwitcher } from ".";

export default function WithThemeSwitcherStoryBookHelper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-xl">
      <ThemeSwitcher isNotFixed />
      <div className="h-8 "></div>
      {children}
    </div>
  );
}
