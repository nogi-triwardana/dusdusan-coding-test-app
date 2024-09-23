import { Slider } from "@/components/molecules";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

const bannerItems = [
  {
    description: 'Dengan menjadi Reseller, tentunya Anda akan mendapatkan harga reseller yang jauh lebih murah dari harga retail dengan potongan harga hingga 50%.',
    image: 'https://www.dusdusan.com/assets/svg/20fb1fd356f78e7fd0b332e53e7f9794.svg',
  },
  {
    description: 'Setiap Pembelanjaan, anda bisa mendapatkan point. Point ini dapat anda tukarkan dengan berbagai reward menarik.',
    image: 'https://www.dusdusan.com/assets/svg/a23828891b11a52ba7665657eed68611.svg',
  },
  {
    description: 'Berbagai hadiah seperti produk, voucher, handphone, motor, mobil hingga umroh bisa Anda dapatkan langsung tanpa diundi di setiap kesempatan.',
    image: 'https://www.dusdusan.com/assets/svg/5bb826b8c819570232464218ee6628c9.svg',
  },
  {
    description: 'Tidak ada target, tidak ada tutup poin, tidak perlu repot rekrut orang. Saatnya Anda memiliki dan merintis bisnis yang mudah dan menghasilkan.',
    image: 'https://www.dusdusan.com/assets/svg/59c4ddd5a12d45d582cbd096d871f716.svg',
  },
  {
    description: 'Cara mudah dan murah dengan titip dropship bersama para reseller yang tersebar di seluruh Indonesia. Serta nikmati juga fitur gratis ongkir dengan syarat dan ketentuan yang berlaku.',
    image: 'https://www.dusdusan.com/assets/svg/e66037d2d97e18625950d33af60c61e9.svg',
  },
];

const BannerSection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center text-white justify-center w-full bg-[#00b0b9] border-b-[2px] border-white h-fit">
      <div className="font-bold leading-[50px] text-lg">
        Dusdusan.com
      </div>
      <div className="border-b-[3px] border-white w-[100px]" />
      <div className="text-sm m-[15px]">
        Platform Komunitas Bisnis Reseller Dropship Online, Supplier Grosir, serta belajar banyak hal positif yang dapat meningkatkan bisnis Anda.
      </div>
      <Slider className="h-fit">
        {bannerItems?.map((item, key) => (
          <SwiperSlide key={'banner-section-' + key}>
            <div className="flex flex-col w-fit justify-center text-center items-center ">
              <Image
                src={item.image}
                width={120}
                height={120}
                alt=""
              />
              <div className="my-[20px] mx-[15px] text-sm">
                {item.description}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSection;