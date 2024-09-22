type TButtonProps = {
  className: string;
  children: React.ReactNode;
  endIcon?: any;
};

type TNavbarProps = {
  items: {
    label: string;
    redirect: string;
  }[]
}

type TProductCardProps = {
  imgSrc: string;
  title: string;
  price: string;
};