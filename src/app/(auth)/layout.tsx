import React from "react";

type Props = { children: React.ReactNode };

const layout = ({ children }: Props) => {
  return (
    <div className="flex bg-green-400 w-full h-screen justify-end">
      <div className="text-black w-full lg:w-[800px] flex items-center justify-center h-full flex-col lg:rounded-l-lg bg-white py-5">
        {children}
      </div>
    </div>
  );
};

export default layout;
