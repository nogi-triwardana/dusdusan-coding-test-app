import Image from "next/image";
import { Button } from "@/components/atoms";
import { FaChevronRight } from "react-icons/fa";

const items = [
  {
    image: '/assets/images/example-brand-1.jpg',
    title: 'Bambang',
  },
  {
    image: '/assets/images/example-brand-2.jpg',
    title: 'Technoplast',
  },
  {
    image: '/assets/images/example-brand-3.jpg',
    title: 'Smart Mom',
  },
  {
    image: '/assets/images/example-brand-4.jpg',
    title: 'Homecook',
  },
  {
    image: '/assets/images/example-brand-5.jpg',
    title: 'Berlinger Haus',
  },
];

const BrandSection = () => {
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
        {items.map((item, key) => (
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
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;