"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { useMediaQuery } from "@/utils/hooks";

import "swiper/css";

const MOCK = [
  { id: "1", value: 2, name: "Giáo sư - Tiến sĩ" },
  { id: "2", value: 5, name: "Phó Giáo sư - Tiến sĩ" },
  { id: "3", value: 7, name: "Tiến sĩ" },
  { id: "4", value: 13, name: "Thạc sĩ" },
  { id: "5", value: 13, name: "Cử nhân" },
];

export const MQualityTeacher = () => {
  //#region Data
  const { currentWidth } = useMediaQuery();
  //#endregion

  //#region Render

  //#endregion
  return (
    <section className="mt-16">
      <h3 className="text-center text-primary font-bold font-serif4 text-clamp-section-title uppercase mb-5">
        chất lượng giảng viên
      </h3>
      <p className="text-sub max-w-[610px] text-center m-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adispiscing elit. Nulla viverra,
        risus non lobortis feugigat, eros nisi gravida libero, a laoreet velit
        enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor
      </p>

      {currentWidth < 768 ? (
        <Swiper slidesPerView={2} centeredSlides loop spaceBetween={10}>
          {MOCK.map((e) => (
            <SwiperSlide
              key={e.id}
              className="!h-[150px] bg-white rounded-10px"
            >
              <h4 className="text-center font-serif4 font-bold text-[56px] text-primary-red">
                {e.value}
              </h4>
              <p className="text-center text-sub">{e.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex gap-7 md:mx-2 lg:mx-auto items-baseline justify-center">
          {MOCK.map((e) => (
            <div key={e.id} className="w-[150px]">
              <h4 className="text-center font-serif4 font-bold text-[56px] text-primary-red">
                {e.value}
              </h4>
              <p className="text-center text-sub">{e.name}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
