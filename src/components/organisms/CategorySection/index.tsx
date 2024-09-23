import Image from "next/image";

const CategorySection = ({
  categories
}: TCategorySectionProps) => {
  return (
    <div className="bg-[linear-gradient(-145deg,#ffffff,#f58120,#ffac67)] w-full p-[15px]">
      <div className="text-white font-bold text-sm">
        Kategori Produk
      </div>
      <div className="grid grid-cols-6 gap-3 mt-[15px]">
        {categories?.slice(0, 12)?.map((item, key) => (
          <div 
            key={'category-section-' + key}
            className="flex flex-col justify-center items-center gap-[10px]"
          >
            <div className="bg-white w-[60px] h-[60px] rounded-[10px] p-[10px] shadow-md">
              <Image
                src={key === 11 ? '/assets/icons/lainnya-icon.svg' : item.image}
                width={'0'}
                height={'0'}
                sizes={'100vh'}
                className="h-auto w-full"
                alt={''}
              />
            </div>
            <div className="whitespace-nowrap text-ellipsis overflow-hidden text-white text-xs w-[60px] text-center">
              {key === 11 ? 'Lainnya' : item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;