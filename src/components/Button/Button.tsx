import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="text-4xl text-red-800 bg-blue-500 rounded p-10">
      {props.label}
    </button>
  );
};

export default Button;
