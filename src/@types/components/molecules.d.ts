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

type TSliderProps = {
  className?: string;
  children: React.ReactNode;
}