"use client";

import { useState } from "react";

import { Autoplay, Swiper as SwiperType } from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

const MOCK = [
  {
    id: "1",
    image: "/images/news4.png",
    tag: "sự kiện",
    title: "Gần 700 chiến sĩ Mùa hè xanh HCMUE lên đường làm nhiệm vụ. #1",
    description:
      "Trường Đại học Sư phạm Thành phố Hồ Chí Minh là “cái nôi” của chiến dịch Mùa hè, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero",
  },
  {
    id: "2",
    image: "/images/news4.png",
    tag: "sự kiện",
    title: "Gần 700 chiến sĩ Mùa hè xanh HCMUE lên đường làm nhiệm vụ. #2",
    description:
      "Trường Đại học Sư phạm Thành phố Hồ Chí Minh là “cái nôi” của chiến dịch Mùa hè, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero",
  },
  {
    id: "3",
    image: "/images/news4.png",
    tag: "sự kiện",
    title: "Gần 700 chiến sĩ Mùa hè xanh HCMUE lên đường làm nhiệm vụ. #3",
    description:
      "Trường Đại học Sư phạm Thành phố Hồ Chí Minh là “cái nôi” của chiến dịch Mùa hè, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero",
  },
  {
    id: "4",
    image: "/images/news4.png",
    tag: "sự kiện",
    title: "Gần 700 chiến sĩ Mùa hè xanh HCMUE lên đường làm nhiệm vụ. #4",
    description:
      "Trường Đại học Sư phạm Thành phố Hồ Chí Minh là “cái nôi” của chiến dịch Mùa hè, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero",
  },
  {
    id: "5",
    image: "/images/news4.png",
    tag: "sự kiện",
    title: "Gần 700 chiến sĩ Mùa hè xanh HCMUE lên đường làm nhiệm vụ. #5",
    description:
      "Trường Đại học Sư phạm Thành phố Hồ Chí Minh là “cái nôi” của chiến dịch Mùa hè, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero",
  },
  {
    id: "6",
    image: "/images/news4.png",
    tag: "sự kiện",
    title: "Gần 700 chiến sĩ Mùa hè xanh HCMUE lên đường làm nhiệm vụ. #6",
    description:
      "Trường Đại học Sư phạm Thành phố Hồ Chí Minh là “cái nôi” của chiến dịch Mùa hè, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero",
  },
  {
    id: "7",
    image: "/images/news4.png",
    tag: "sự kiện",
    title: "Gần 700 chiến sĩ Mùa hè xanh HCMUE lên đường làm nhiệm vụ. #7",
    description:
      "Trường Đại học Sư phạm Thành phố Hồ Chí Minh là “cái nôi” của chiến dịch Mùa hè, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero",
  },
  {
    id: "8",
    image: "/images/news4.png",
    tag: "sự kiện",
    title: "Gần 700 chiến sĩ Mùa hè xanh HCMUE lên đường làm nhiệm vụ. #8",
    description:
      "Trường Đại học Sư phạm Thành phố Hồ Chí Minh là “cái nôi” của chiến dịch Mùa hè, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero",
  },
  {
    id: "9",
    image: "/images/news4.png",
    tag: "sự kiện",
    title: "Gần 700 chiến sĩ Mùa hè xanh HCMUE lên đường làm nhiệm vụ. #9",
    description:
      "Trường Đại học Sư phạm Thành phố Hồ Chí Minh là “cái nôi” của chiến dịch Mùa hè, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero",
  },
];

type Data = {
  id: string;
  image: string;
  tag: string;
  title: string;
  description: string;
};

const shiftLeft = (arr: any[]) => {
  const newValue = [...arr];
  if (newValue.length <= 1) {
    return newValue;
  }

  const firstElement = newValue.shift();
  newValue.push(firstElement);

  return newValue;
};

const breakpoints: SwiperProps["breakpoints"] = {
  0: {
    spaceBetween: 20,
    slidesPerView: 1.25,
  },
  600: {
    spaceBetween: 25,
    slidesPerView: 2.25,
  },
  768: {
    spaceBetween: 30,
    slidesPerView: 3,
  },
  1024: {
    spaceBetween: 35,
    slidesPerView: 4.25,
  },
  1280: {
    spaceBetween: 40,
    slidesPerView: 5,
  },
};

export const MNewsAndEvents = () => {
  //#region Data
  const [currentSlide, setCurrentSlide] = useState<Data>(MOCK[0]);
  //#endregion

  //#region Event
  const onSlideChange = (e: SwiperType) => {
    setCurrentSlide(MOCK[e.realIndex]);
  };
  //#endregion

  //#region Render
  return (
    <div className="container">
      {/* Desktop */}
      <div className="hidden 2xl:grid grid-cols-[max-content,_auto] mb-24">
        <div className="relative max-w-[762px]">
          <img
            src={currentSlide.image}
            alt=""
            className="w-full aspect-[762/423] cover"
          />
          <div className="absolute mt-10px  right-0 max-w-[70%]">
            <span className="uppercase text-sub leading-6">
              {currentSlide.tag}
            </span>
            <h5 className="text-primary mt-10px  font-bold font-serif4 text-3xl">
              {currentSlide.title}
            </h5>
            <p className="text-sub mt-10px leading-6">
              {currentSlide.description}
            </p>
          </div>
        </div>
        <div className="overflow-x-hidden flex flex-col justify-between">
          <h3 className="text-primary w-fit pl-10 font-bold font-serif4 text-[60px] border-b-[2px] border-solid border-[#124874]">
            Tin tức - Sự kiện
          </h3>
          <div className="mt-10">
            <Swiper
              loop
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
              slidesPerView={1.25}
              spaceBetween={40}
              className="!ml-10"
              onSlideChange={onSlideChange}
            >
              {shiftLeft(MOCK).map((e) => (
                <SwiperSlide key={e.id} className="relative">
                  <img
                    src={e.image}
                    alt=""
                    className="w-full aspect-[397/264]"
                  />
                  <div className="mt-10px">
                    <span className="uppercase text-sub leading-6">
                      {e.tag}
                    </span>
                    <h5 className="text-primary mt-10px  font-bold font-serif4 text-2xl">
                      {e.title}
                    </h5>
                    <p className="text-sub mt-10px leading-6 line-clamp-2">
                      {e.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="mx-4 mb-10 block 2xl:hidden">
        <h3 className="text-primary font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-[60px] font-serif4 pb-3 border-b-[2px] border-solid border-[#124874] inline">
          Tin tức - Sự kiện
        </h3>
        <Swiper loop breakpoints={breakpoints} className="mt-10">
          {MOCK.map((e) => (
            <SwiperSlide key={e.id} className="relative">
              <img src={e.image} alt="" className="w-full aspect-[397/264]" />
              <div className="mt-10px">
                <span className="uppercase text-sub leading-6">{e.tag}</span>
                <h5 className="text-primary md:mt-10px font-bold font-serif4 text-lg md:text-xl 2xl:text-2xl">
                  {e.title}
                </h5>
                <p className="text-sub mt-[5px] md:mt-10px leading-6 line-clamp-2">
                  {e.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
  //#endregion
};
