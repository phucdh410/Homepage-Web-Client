"use client";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import "swiper/css";
import "./styles.scss";

export const MTrainingDisciplines = () => {
  return (
    <section className="mt-16 training-disciplines">
      <div className="bg-[url('/images/cacnganhdaotao.png')] pt-50px pb-10 px-8">
        <h3 className="uppercase font-serif4 font-bold text-clamp-section-title text-center mb-5">
          các ngành đào tạo
        </h3>
        <p className="max-w-[610px] m-auto text-center mb-12">
          Lorem ipsum dolor sit amet, consectetur adispiscing elit. Nulla
          viverra, risus non lobortis feugigat, eros nisi gravida libero, a
          laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar
          tempor
        </p>
        <Swiper modules={[Navigation]} navigation slidesPerView={1} loop>
          <SwiperSlide>
            <h4 className=" font-bold text-3xl font-serif4 text-center mb-9">
              Đại học
            </h4>
            <div className="flex justify-evenly">
              <div>
                <ul>
                  <li>Cử nhân Sư phạm Tin học</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Cử nhân Công nghệ thông tin</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Cử nhân Công nghệ thông tin</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h4 className=" font-bold text-3xl font-serif4 text-center mb-9">
              Đại học
            </h4>
            <div className="flex justify-evenly">
              <div>
                <ul>
                  <li>Cử nhân Sư phạm Tin học</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Cử nhân Công nghệ thông tin</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Cử nhân Công nghệ thông tin</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
