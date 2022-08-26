import React from "react";

export interface CheckboxProps {
  label: string;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <div>
      <div className="pl-4 sm:pl-0 relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            // onChange={onClick}
            className="focus:ring-[#FA001E] text-[#FA001E] h-4 w-4  border-[#161616] rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-white">
            {props}
          </label>
        </div>
      </div>
      <div className="pl-4 sm:pl-0 relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            // onChange={onClick}
            className="h-4 w-4  border-[#161616] rounded focus:ring-[#0320A5] text-[#0320A5]"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-white">
            {props}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
