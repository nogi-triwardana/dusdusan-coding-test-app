import classNames from "classnames"

const Button = ({
  children,
  className,
  endIcon,
}: TButtonProps) => {
  return (
    <button 
      className={
        classNames(
          "rounded-[5px] max-h-[40px] text-sm font-medium text-center w-full px-[15px] flex items-center gap-1",
          className
        )
      }
    >
      {children}
      {endIcon && endIcon}
    </button>
  );
};

export default Button;