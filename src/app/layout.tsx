import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import React from "react";
import "./globals.css";

type Props = { children: React.ReactNode };

const inter = Inter({ subsets: ["latin"] });

const layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
};

export default layout;
