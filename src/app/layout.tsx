import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";

type Props = { children: React.ReactNode };

const inter = Inter({ subsets: ["latin"] });

const layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
};

export default layout;
