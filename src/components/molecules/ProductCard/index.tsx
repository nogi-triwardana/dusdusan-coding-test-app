import Image from "next/image";

const ProductCard = ({
  imgSrc,
  title,
  price,
}: TProductCardProps) => {
  return (
    <div className="flex flex-col flex-shrink-0 w-[150px] h-[270px] cursor-pointer rounded-[6px] shadow-md text-xs bg-white relative">
      <Image
        src={imgSrc}
        width={'0'}
        height={'0'}
        sizes="100vw"
        className="w-full h-auto rounded-t-[6px]"
        alt=""
      />
      <div className="p-[10px]">
        <div className="font-bold line-clamp-2 max-h-[32px] h-full">
          {title}
        </div>
        <div className="text-[#ffad00] font-bold">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;