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
  imgSrc?: string | any;
  imageList?: any;
  name: string;
  standardRetailPrice: number;
  uom: string;
};