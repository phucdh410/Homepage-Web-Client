"use client";

import { EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-coverflow";

import "swiper/css";

export const MResearch = () => {
  return (
    <section className="mt-16">
      <div className="max-w-2xl m-auto mb-10">
        <h2 className="text-center mb-[10px] uppercase text-primary text-[35px] leading-[48px] font-extrabold font-serif4 ">
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
        <SwiperSlide className="!w-[892px] relative">
          <div className="bg-white p-5 grid grid-cols-2 gap-10 rounded-20px">
            <div className="rounded-inherit">
              <img
                src="/images/research.png"
                alt=""
                className="aspect-research w-full rounded-l-inherit"
              />
            </div>
            <div>
              <p className="uppercase text-sub2 mb-[10px] text-sm">
                công bố quốc tế
              </p>
              <div className="h-[5px] bg-[#124874] w-[50px] mb-[10px]"></div>
              <h3 className="leading-10 line-clamp-3 text-3xl font-serif4 mb-5 font-bold text-primary">
                Ký kết hợp đồng đào tạo giáo viên theo nghị định 116/202...
              </h3>
              <p className="text-sub line-clamp-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[892px] relative">
          <div className="bg-white p-5 grid grid-cols-2 gap-10 rounded-20px">
            <div className="rounded-inherit">
              <img
                src="/images/research.png"
                alt=""
                className="aspect-research w-full rounded-l-inherit"
              />
            </div>
            <div>
              <p className="uppercase text-sub2 mb-[10px] text-sm">
                công bố quốc tế
              </p>
              <div className="h-[5px] bg-[#124874] w-[50px] mb-[10px]"></div>
              <h3 className="leading-10 line-clamp-3 text-3xl font-serif4 mb-5 font-bold text-primary">
                Ký kết hợp đồng đào tạo giáo viên theo nghị định 116/202...
              </h3>
              <p className="text-sub line-clamp-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[892px] relative">
          <div className="bg-white p-5 grid grid-cols-2 gap-10 rounded-20px">
            <div className="rounded-inherit">
              <img
                src="/images/research.png"
                alt=""
                className="aspect-research w-full rounded-l-inherit"
              />
            </div>
            <div>
              <p className="uppercase text-sub2 mb-[10px] text-sm">
                công bố quốc tế
              </p>
              <div className="h-[5px] bg-[#124874] w-[50px] mb-[10px]"></div>
              <h3 className="leading-10 line-clamp-3 text-3xl font-serif4 mb-5 font-bold text-primary">
                Ký kết hợp đồng đào tạo giáo viên theo nghị định 116/202...
              </h3>
              <p className="text-sub line-clamp-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[892px] relative">
          <div className="bg-white p-5 grid grid-cols-2 gap-10 rounded-20px">
            <div className="rounded-inherit">
              <img
                src="/images/research.png"
                alt=""
                className="aspect-research w-full rounded-l-inherit"
              />
            </div>
            <div>
              <p className="uppercase text-sub2 mb-[10px] text-sm">
                công bố quốc tế
              </p>
              <div className="h-[5px] bg-[#124874] w-[50px] mb-[10px]"></div>
              <h3 className="leading-10 line-clamp-3 text-3xl font-serif4 mb-5 font-bold text-primary">
                Ký kết hợp đồng đào tạo giáo viên theo nghị định 116/202...
              </h3>
              <p className="text-sub line-clamp-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[892px] relative">
          <div className="bg-white p-5 grid grid-cols-2 gap-10 rounded-20px">
            <div className="rounded-inherit">
              <img
                src="/images/research.png"
                alt=""
                className="aspect-research w-full rounded-l-inherit"
              />
            </div>
            <div>
              <p className="uppercase text-sub2 mb-[10px] text-sm">
                công bố quốc tế
              </p>
              <div className="h-[5px] bg-[#124874] w-[50px] mb-[10px]"></div>
              <h3 className="leading-10 line-clamp-3 text-3xl font-serif4 mb-5 font-bold text-primary">
                Ký kết hợp đồng đào tạo giáo viên theo nghị định 116/202...
              </h3>
              <p className="text-sub line-clamp-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[892px] relative">
          <div className="bg-white p-5 grid grid-cols-2 gap-10 rounded-20px">
            <div className="rounded-inherit">
              <img
                src="/images/research.png"
                alt=""
                className="aspect-research w-full rounded-l-inherit"
              />
            </div>
            <div>
              <p className="uppercase text-sub2 mb-[10px] text-sm">
                công bố quốc tế
              </p>
              <div className="h-[5px] bg-[#124874] w-[50px] mb-[10px]"></div>
              <h3 className="leading-10 line-clamp-3 text-3xl font-serif4 mb-5 font-bold text-primary">
                Ký kết hợp đồng đào tạo giáo viên theo nghị định 116/202...
              </h3>
              <p className="text-sub line-clamp-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex flex-wrap mb-10 relative m-auto items-baseline justify-between max-w-[500px]">
        <div className="w-[160px] text-center">
          <h3 className="mb-[5px] text-clamp1 leading-[48px] font-bold text-primary font-serif4">
            1379
          </h3>
          <p className="text-[16px] leading-[20px] text-sub font-montserrat">
            Bài báo
          </p>
        </div>
        <div className="w-[160px] text-center">
          <h3 className="mb-[5px] text-clamp1 leading-[48px] font-bold text-primary font-serif4">
            10
          </h3>
          <p className="text-[16px] leading-[20px] text-sub font-montserrat">
            Công bố quốc tế
          </p>
        </div>
        <div className="w-[160px] text-center">
          <h3 className="mb-[5px] text-clamp1 leading-[48px] font-bold text-primary font-serif4">
            175
          </h3>
          <p className="text-[16px] leading-[20px] text-sub font-montserrat">
            Nhà khoa học nước ngoài công tác
          </p>
        </div>
      </div>
    </section>
  );
};
