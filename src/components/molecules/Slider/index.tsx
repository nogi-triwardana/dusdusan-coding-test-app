"use client"

import { Swiper } from 'swiper/react';
import { Autoplay, Navigation, A11y } from 'swiper/modules';
import classNames from 'classnames';

const Slider = ({ 
  className,
  children 
}: TSliderProps) => {
  return (
    <Swiper 
      autoplay
      loop
      modules={[Navigation, Autoplay, A11y]} 
      className={
        classNames("w-[480px] h-[480px] cursor-pointer", className)
      }
    >
      {children}
    </Swiper>
  );
};

export default Slider;