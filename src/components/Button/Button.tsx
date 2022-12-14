import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  readonly label: string;
  readonly onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.VFC<ButtonProps> = ({ label, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-[#FA001E] hover:bg-red-700 mb-3 sm:ml-0 inline-flex items-center px-8 pb-2 pt-2 border border-white text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${variant} border disabled:bg-gray-300 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
      >
        {label}
      </button>
      <button className="bg-[#0320A5] hover:bg-blue-700 mb-3 sm:ml-0 inline-flex items-center px-8 pb-2 pt-2 border border-white text-base font-medium rounded-md shadow-sm text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${variant} border disabled:bg-gray-300 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none">
        {label}
      </button>
    </div>
  );
};

