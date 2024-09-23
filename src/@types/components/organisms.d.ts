type TProductSectionProps = {
  title: string;
  bgColor: string;
  titleColor: string;
  products: TProductCardProps[]
};

type TPromoSectionProps = {
  items: any[];
}

type TCategorySectionProps = {
  categories: any[];
}

type TArticleProps = {
  items: {
    imagePath: string;
    name: string;
    createAt: Date;
  }[];
};

type TBrandSectionProps = {
  items: {
    image: string;
    name: string;
  }[]
};