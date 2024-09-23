import { Button } from "@/components/atoms";
import { ProductCard } from "@/components/molecules";
import { FaChevronRight } from "react-icons/fa";

const items = [
  {
    imgSrc: '/assets/images/example-product-1.jpg',
    title: 'Cypruz Marble Cookware Set of 7 pcs',
    price: 'Rp 969,000/Set',
  },
  {
    imgSrc: '/assets/images/example-product-2.jpg',
    title: 'Value Kitchen Set of 5 Blue',
    price: 'Rp 199,000/Set',
  },
  {
    imgSrc: '/assets/images/example-product-1.jpg',
    title: 'Technoplast Square Dishes Keeper 3 Susun Brown',
    price: 'Rp 179,000/Set',
  },
  {
    imgSrc: '/assets/images/example-product-2.jpg',
    title: 'Bodimax New Running Machine',
    price: 'Rp 3,680,000/Unit',
  },
  {
    imgSrc: '/assets/images/example-product-1.jpg',
    title: 'Bambang Jumbo Food Container set 14 Pcs',
    price: 'Rp 177,000/Dus',
  },
];

const ProductSection = ({
  title,
  bgColor,
  titleColor,
  products,
}: TProductSectionProps) => {
  return (
    <div className={`${bgColor} w-full p-[15px] space-y-3`}>
      <div className="flex justify-between items-center">
        <div className={`text-sm font-bold ${titleColor}`}>{title}</div>
        <div>
          <Button
            className="text-white bg-[#ffad00] text-xs h-8"
            endIcon={<FaChevronRight />}
          >
            Lihat semua
          </Button>
        </div>
      </div>
      <div className="
        flex flex-row w-full max-w-[480px] gap-[10px] overflow-x-scroll py-[10px] 
        [&::-webkit-scrollbar]:h-2 
        [&::-webkit-scrollbar]:rounded-[12px]
        [&::-webkit-scrollbar-track]:hover:bg-[rgba(0,0,0,0.1)]
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:rounded-[12px]
        [&::-webkit-scrollbar-thumb]:bg-gray-300
      ">
        {products?.slice(0, 5)?.map((item, key) => (
          <ProductCard
            key={'product-section-item-' + key}
            name={item?.name}
            standardRetailPrice={item?.standardRetailPrice}
            imgSrc={item?.imageList?.[0]?.imagePath}
            uom={item?.uom}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;