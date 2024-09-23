import Image from "next/image";

const items = [
  {
    title: 'Persiapan Penjualan',
    redirect: '',
    icon: '/assets/icons/persiapan-jualan-icon.png',
  },
  {
    title: 'Ibu dan Bayi',
    redirect: '',
    icon: '/assets/icons/ibu-dan-bayi-icon.png',
  },
  {
    title: 'Muslim',
    redirect: '',
    icon: '/assets/icons/muslim-icon.png',
  },
  {
    title: 'Rumah Tangga',
    redirect: '',
    icon: '/assets/icons/rumah-tangga-icon.png',
  },
  {
    title: 'Elektronik',
    redirect: '',
    icon: '/assets/icons/elektronik-icon.png',
  },
  {
    title: 'Textile',
    redirect: '',
    icon: '/assets/icons/textile-icon.png',
  },
  {
    title: 'Kesehatan dan Kecantikan',
    redirect: '',
    icon: '/assets/icons/kesehatan-kecantikan-icon.png',
  },
  {
    title: 'Hobi dan Olahraga',
    redirect: '',
    icon: '/assets/icons/hobi-olahraga-icon.png',
  },
  {
    title: 'Stationary',
    redirect: '',
    icon: '/assets/icons/stationary-icon.png',
  },
  {
    title: 'Dapur',
    redirect: '',
    icon: '/assets/icons/dapur-icon.png',
  },
  {
    title: 'Makanan dan Minuman',
    redirect: '',
    icon: '/assets/icons/makanan-minuman-icon.png',
  },
  {
    title: 'Lainnya',
    redirect: '',
    icon: '/assets/icons/lainnya-icon.svg',
  },
];

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