"use client";

import Link from "next-intl/link";

import { useState } from "react";

import type { Swiper as SwiperType, SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./styles.scss";

const MOCK = [
  {
    id: "1",
    name: "Toán - Tin học",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg1.png",
    logo: "/images/khoa/toantin.png",
  },
  {
    id: "2",
    name: "CNTT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg2.png",
    logo: "/images/khoa/cntt.png",
  },
  {
    id: "3",
    name: "Vật lý",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg1.png",
    logo: "/images/khoa/vatly.png",
  },
  {
    id: "4",
    name: "Hóa học",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg2.png",
    logo: "/images/khoa/hoahoc.png",
  },
  {
    id: "5",
    name: "Sinh học",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg1.png",
    logo: "/images/khoa/sinhhoc.png",
  },
  {
    id: "6",
    name: "Lịch sử",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg2.png",
    logo: "/images/khoa/lichsu.png",
  },
  {
    id: "7",
    name: "Địa lý",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg1.png",
    logo: "/images/khoa/dialy.png",
  },
  {
    id: "8",
    name: "Toán - Tin học",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg1.png",
    logo: "/images/khoa/toantin.png",
  },
  {
    id: "9",
    name: "CNTT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg2.png",
    logo: "/images/khoa/cntt.png",
  },
  {
    id: "10",
    name: "Vật lý",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg1.png",
    logo: "/images/khoa/vatly.png",
  },
  {
    id: "11",
    name: "Hóa học",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg2.png",
    logo: "/images/khoa/hoahoc.png",
  },
  {
    id: "12",
    name: "Sinh học",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg1.png",
    logo: "/images/khoa/sinhhoc.png",
  },
  {
    id: "13",
    name: "Lịch sử",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg2.png",
    logo: "/images/khoa/lichsu.png",
  },
  {
    id: "14",
    name: "Địa lý",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg1.png",
    logo: "/images/khoa/dialy.png",
  },
  {
    id: "15",
    name: "Vật lý",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg1.png",
    logo: "/images/khoa/vatly.png",
  },
  {
    id: "16",
    name: "Hóa học",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg2.png",
    logo: "/images/khoa/hoahoc.png",
  },
  {
    id: "17",
    name: "Sinh học",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg1.png",
    logo: "/images/khoa/sinhhoc.png",
  },
  {
    id: "18",
    name: "Lịch sử",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg2.png",
    logo: "/images/khoa/lichsu.png",
  },
  {
    id: "19",
    name: "Địa lý",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum",
    slug: "/",
    banner: "/images/khoa/bg1.png",
    logo: "/images/khoa/dialy.png",
  },
];

const TAGS = [
  { id: "-1", name: "Tất cả" },
  { id: "1", name: "Khoa học Xã hội" },
  { id: "2", name: "Khoa học Tự nhiên" },
  { id: "3", name: "Ngoại ngữ" },
  { id: "4", name: "Đặc thù" },
];

const BREAKPOINTS: SwiperOptions["breakpoints"] = {
  375: { slidesPerView: 2, spaceBetween: 0 },
  768: { slidesPerView: 4, spaceBetween: 10 },
  1024: { slidesPerView: 6, spaceBetween: 15 },
  1366: { slidesPerView: 8, spaceBetween: 20 },
};

export const MBannerSlider = () => {
  //#region Data
  const [activeData, setActiveData] = useState(MOCK[0]);
  //#endregion

  //#region Event
  const onSlideActiveChange = (slide: SwiperType) => {
    setActiveData(MOCK[slide.realIndex]);
  };
  //#endregion

  //#region Render
  return (
    <div
      className="pt-[140px] bg-center bg-no-repeat bg-cover banner-slider"
      style={{
        backgroundImage: `url('${activeData.banner}')`,
        transition: "background 1s linear",
      }}
    >
      <div className="container px-[2rem]">
        <div className="w-max">
          <ul className="flex flex-col md:flex-row gap-5 2xl:gap-10 items-center">
            {TAGS.map((e) => (
              <li key={e.id}>
                <button>{e.name}</button>
              </li>
            ))}
          </ul>
          <div className="custom-divider mt-10px h-[1px] bg-[linear-gradient(90deg,_#FFF_0%,_rgba(255,255,255,0.00)_100%)]" />
        </div>
        <h2 className="uppercase mt-[50px] mb-10px font-bold text-2xl 2xl:text-[40px] font-serif4">
          khoa {activeData.name}
        </h2>
        <p className="mb-[50px]">{activeData.description}</p>
        <Link
          href={`/departments/${activeData.id}`}
          className="inline-block rounded-10px mb-[50px] font-serif4 px-12 py-2 backdrop-filter-[blur(7.5px)] bg-[rgba(255,255,255,0.40)]"
        >
          Xem chi tiết
        </Link>
      </div>
      <div className=" bg-[linear-gradient(90deg,_#000_0%,_rgba(0,_0,_0,_0.00)_20.05%,_rgba(0,_0,_0,_0.00)_80.99%,_#000_100%)]">
        <Swiper
          spaceBetween={20}
          slidesPerView={8}
          loop={MOCK.length >= 8 * 2 ? true : false}
          grabCursor
          centeredSlides
          onActiveIndexChange={onSlideActiveChange}
          breakpoints={BREAKPOINTS}
        >
          {MOCK.map((e) => (
            <SwiperSlide
              key={e.id}
              className="text-center w-max department-slide-active"
            >
              <img
                src={e.logo}
                alt=""
                className="m-auto mb-10px aspect-square h-[125px] w-[125px]"
              />
              <p className="font-serif4">Khoa</p>
              <p className="font-serif4 pb-5">{e.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
  //#endregion
};
