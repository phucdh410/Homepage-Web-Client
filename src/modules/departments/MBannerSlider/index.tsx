"use client";

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

export const MBannerSlider = () => {
  return (
    <div
      className="pt-[140px] banner-slider"
      style={{ backgroundImage: "url('/images/khoa/bg1.png')" }}
    >
      <div className="container px-[2rem]">
        <div className="w-max">
          <ul className="flex gap-10 items-center">
            {TAGS.map((e) => (
              <li key={e.id}>
                <button>{e.name}</button>
              </li>
            ))}
          </ul>
          <div className="custom-divider mt-[10px] h-[1px] bg-[linear-gradient(90deg,_#FFF_0%,_rgba(255,255,255,0.00)_100%)]"></div>
        </div>
        <h2 className="uppercase mt-[50px] mb-[10px] font-bold text-[40px] font-serif4">
          khoa toán - tin học
        </h2>
        <p className="mb-[50px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          viverra, risus non lobortis feugiat, eros nisi gravida libero, a
          laoreet velit enim a diam. Vestibulum fermentum
        </p>
        <button className="rounded-10px mb-[50px] font-serif4 px-12 py-2 backdrop-filter-[blur(7.5px)] bg-[rgba(255,255,255,0.40)]">
          Xem chi tiết
        </button>

        <div className=" bg-[linear-gradient(90deg,_#000_0%,_rgba(0,_0,_0,_0.00)_20.05%,_rgba(0,_0,_0,_0.00)_80.99%,_#000_100%)]">
          <Swiper
            slidesPerView={8}
            loop={MOCK.length >= 8 * 2 ? true : false}
            spaceBetween={20}
            grabCursor
            centeredSlides
          >
            {MOCK.map((e) => (
              <SwiperSlide
                key={e.id}
                className="text-center w-max department-slide-active"
              >
                <img
                  src={e.logo}
                  alt=""
                  className="m-auto mb-[10px] aspect-square h-[125px] w-[125px]"
                />
                <p className="font-serif4">Khoa</p>
                <p className="font-serif4 pb-5">{e.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
