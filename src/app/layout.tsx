import { Roboto } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import React from "react";
import "./globals.css";

type Props = { children: React.ReactNode };

const roboto = Roboto({
  weight: ["100", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${roboto.className} bg-white dark:bg-slate-800`}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
};

export default layout;
