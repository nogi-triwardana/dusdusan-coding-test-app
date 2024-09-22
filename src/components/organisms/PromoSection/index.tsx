import { Button } from "@/components/atoms";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const PromoSection = () => {
  return (
    <div className="flex flex-col gap-[15px] w-full py-[15px]">
      <div className="flex justify-between items-center px-[15px]">
        <div className="text-sm font-bold text-[#282828]">Promo</div>
        <div>
          <Button
            className="text-white bg-[#ffad00] text-xs h-8"
            endIcon={<FaChevronRight />}
          >
            Lihat Semua
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1">
          <Image
            src={'/assets/images/example-promo-1.jpg'}
            width={'0'}
            height={'0'}
            sizes="100vw"
            className="w-full h-auto rounded-[3px]"
            alt=""
          />
          <Image
            src={'/assets/images/example-promo-2.jpg'}
            width={'0'}
            height={'0'}
            sizes="100vw"
            className="w-full h-auto rounded-[3px]"
            alt=""
          />
          <Image
            src={'/assets/images/example-promo-3.jpg'}
            width={'0'}
            height={'0'}
            sizes="100vw"
            className="w-full h-auto rounded-[3px]"
            alt=""
          />
      </div>
    </div>
  );
};

export default PromoSection;