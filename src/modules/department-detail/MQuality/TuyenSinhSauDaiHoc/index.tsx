import { useState } from "react";

import type { Swiper as SwiperType, SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const MOCK2 = [
  { id: "1", period: "2011 - 2015", count: 34 },
  { id: "2", period: "2012 - 2016", count: 69 },
  { id: "3", period: "2013 - 2017", count: 23 },
  { id: "4", period: "2014 - 2018", count: 57 },
  { id: "5", period: "2015 - 2019", count: 85 },
  { id: "6", period: "2016 - 2020", count: 47 },
  { id: "7", period: "2017 - 2021", count: 35 },
];

const breakpoints: SwiperOptions["breakpoints"] = {
  0: { slidesPerView: 3 },
  768: { slidesPerView: 3 },
  1280: { slidesPerView: 5 },
};

export const TuyenSinhSauDaiHoc = () => {
  //#region Data
  const [current, setCurrent] = useState<number>(MOCK2[0].count);
  //#endregion

  //#region Event
  const onSlideActiveChange = (slide: SwiperType) => {
    setCurrent(MOCK2[slide.realIndex].count);
  };
  //#endregion

  //#region Render
  return (
    <div className="min-w-0 flex-1">
      <h3 className="uppercase text-center text-primary font-bold font-serif4 text-[25px] mb-[45px] select-none">
        tuyển sinh sau đại học
      </h3>
      <h2 className="uppercase text-center text-primary-red font-bold font-serif4 text-[40px] mb-[45px] select-none">
        {current} hvch
      </h2>
      <Swiper
        onActiveIndexChange={onSlideActiveChange}
        centeredSlides
        grabCursor
        slidesPerView={5}
        breakpoints={breakpoints}
      >
        {MOCK2.map((e) => (
          <SwiperSlide key={e.id} className="text-center text-sub2">
            {e.period}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
  //#endregion
};
