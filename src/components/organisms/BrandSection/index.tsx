import Image from "next/image";
import { Button } from "@/components/atoms";
import { FaChevronRight } from "react-icons/fa";

const BrandSection = ({
  items
}: TBrandSectionProps) => {
  return (
    <div className="flex flex-col w-full gap-3 p-[15px]">
      <div className="flex justify-between">
        <div className="text-sm font-bold">Brand Terpilih</div>
        <div>
          <Button
            className="text-white bg-[#ffad00] text-xs h-8"
            endIcon={<FaChevronRight className="text-[10px]" />}
          >
            Lihat semua
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3 overflow-auto">
        {items?.map((item, key) => (
          <div
            key={'brand-list-' + key}
            className="flex flex-col shadow-md rounded-[4px] bg-white"
          >
            <Image
              src={item.image}
              width={80}
              height={80}
              alt={''}
            />
            <div className="text-center text-xs font-semibold">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;