"use client";

import { EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { CSkeleton } from "@/common/components/others";

export const LResearch = () => {
  return (
    <section className="mt-16">
      <div className="max-w-2xl m-auto mb-10 px-5">
        <h2 className="text-center mb-10px uppercase text-primary text-clamp-home-section-title leading-48px font-extrabold font-serif4 ">
          nghiên cứu
        </h2>
        <p className="text-center text-sub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <Swiper
        modules={[EffectCoverflow]}
        effect={"coverflow"}
        slidesPerView="auto"
        loop
        grabCursor
        centeredSlides
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
        className="mb-10 relative"
      >
        {Array(8)
          .fill("")
          .map((e, i) => (
            <SwiperSlide
              key={i + new Date().toString()}
              className="!w-[clamp(17.5rem,_3.026rem_+_61.7558vw,_55.75rem)] relative"
            >
              <div className="bg-white p-3 md:p-5 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 rounded-20px">
                <div className="rounded-inherit">
                  <CSkeleton
                    isImage
                    className="aspect-research w-full h-full rounded-l-inherit rounded-r-inherit md:rounded-r-none"
                  />
                </div>
                <div>
                  <CSkeleton className=" mb-1 md:mb-10px text-sm" />

                  <div className="h-[5px] bg-[#124874] w-[50px] mb-1 md:mb-10px"></div>

                  <CSkeleton
                    count={2}
                    className="leading-8 md:leading-10  text-[clamp(1.375rem,_1.1858rem_+_0.8073vw,_1.875rem)]  mb-2 md:mb-5 "
                  />

                  <CSkeleton count={4} />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="flex mb-10 relative m-auto items-baseline justify-between max-w-[500px]">
        <div className="w-[160px] text-center">
          <h3 className="mb-[5px] text-clamp1 leading-48px font-bold text-primary font-serif4">
            1379
          </h3>
          <p className="text-base leading-20px text-sub font-montserrat">
            Bài báo
          </p>
        </div>
        <div className="w-[160px] text-center">
          <h3 className="mb-[5px] text-clamp1 leading-48px font-bold text-primary font-serif4">
            10
          </h3>
          <p className="text-base leading-20px text-sub font-montserrat">
            Công bố quốc tế
          </p>
        </div>
        <div className="w-[160px] text-center">
          <h3 className="mb-[5px] text-clamp1 leading-48px font-bold text-primary font-serif4">
            175
          </h3>
          <p className="text-base leading-20px text-sub font-montserrat">
            Nhà khoa học nước ngoài công tác
          </p>
        </div>
      </div>
    </section>
  );
};
