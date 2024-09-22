"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, A11y } from 'swiper/modules';
import Image from 'next/image';

const Slider = () => {
  return (
    <Swiper 
      autoplay
      loop
      modules={[Navigation, Autoplay, A11y]} 
      className="w-[480px] h-[480px] cursor-pointer"
    >
      <SwiperSlide>
        <Image
          src={"/assets/images/example-product-1.jpg"}
          width={480}
          height={480}
          alt={''}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/assets/images/example-product-2.jpg"}
          width={480}
          height={480}
          alt={''}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;