import { useState } from "react";

import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const MOCK1 = [
  { id: "1", period: "2011 - 2015", count: 123 },
  { id: "2", period: "2012 - 2016", count: 343 },
  { id: "3", period: "2013 - 2017", count: 567 },
  { id: "4", period: "2014 - 2018", count: 229 },
  { id: "5", period: "2015 - 2019", count: 236 },
  { id: "6", period: "2016 - 2020", count: 735 },
  { id: "7", period: "2017 - 2021", count: 522 },
];

export const TuyenSinhDaiHoc = () => {
  //#region Data
  const [current, setCurrent] = useState<number>(MOCK1[0].count);
  //#endregion

  //#region Event
  const onSlideActiveChange = (slide: SwiperType) => {
    setCurrent(MOCK1[slide.realIndex].count);
  };
  //#endregion

  //#region Render
  return (
    <div className="min-w-0 flex-1">
      <h3 className="uppercase text-center text-primary font-bold font-serif4 text-[25px] mb-[45px] select-none">
        tuyển sinh đại học
      </h3>
      <h2 className="uppercase text-center text-primary-red font-bold font-serif4 text-[40px] mb-[45px] select-none">
        {current} sinh viên
      </h2>
      <Swiper
        onActiveIndexChange={onSlideActiveChange}
        centeredSlides
        grabCursor
        slidesPerView={5}
      >
        {MOCK1.map((e) => (
          <SwiperSlide key={e.id} className="text-center text-sub2">
            {e.period}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
  //#endregion
};
