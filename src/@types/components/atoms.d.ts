interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon: any;
}

type TButtonProps = {
  className: string;
  children: React.ReactNode;
  endIcon?: any;
};