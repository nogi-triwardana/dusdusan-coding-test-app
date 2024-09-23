import { Button } from "@/components/atoms";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { format } from "date-fns";

const ArticleSection = ({
  items
}: TArticleProps) => {
  return (
    <div className="flex flex-col w-full gap-3 p-[15px]">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <AiFillLike className="text-2xl text-[#00B0B9]" />
          <div className="text-sm font-bold">Menarik untuk disimak</div>
        </div>
        <div>
          <Button
            className="text-white bg-[#ffad00] text-xs h-8"
            endIcon={<FaChevronRight />}
          >
            Lihat lebih banyak
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 divide-y">
        {items?.map((item, key) => (
          <div 
            key={'article-list-' + key}
            className="flex gap-3 pt-[10px]"
          >
            <Image
              src={item.imagePath}
              width={100}
              height={100}
              className="rounded-[7px]"
              alt={''}
            />
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-[#282828] text-xs">
                  Info Promo
                </div>
                <div className="font-medium">
                  {item?.name}
                </div>
              </div>
              <div className="text-[#ffad00] text-sm font-medium">
                {format(item.createAt, 'dd MMM yyyy')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;