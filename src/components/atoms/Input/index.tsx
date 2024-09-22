import React from "react";
import { IconType } from "react-icons";

const Input = ({
  startIcon,
  ...props
}: IInputProps) => {

  return (
    <div className={'flex items-center gap-1 text-sm border border-[#d9d9d9] rounded-[3px] w-full p-2'}>
      {startIcon && 
        React.cloneElement(
          startIcon,
          {
            className: 'text-[#d9d9d9] text-xl font-bold'
          },
          'start-icon-button'
        )
      }
      <input
        className={'focus:outline-none w-full'}
        {...props}
      />
    </div>
  );
};

export default Input;