"use client";

import { TuyenSinhDaiHoc } from "./TuyenSinhDaiHoc";
import { TuyenSinhSauDaiHoc } from "./TuyenSinhSauDaiHoc";

import "swiper/css";
import "./styles.scss";

export const MQuality = () => {
  return (
    <section className="mt-5 section-quality">
      <div className="pt-16 bg-[url('/images/quality.png')] bg-no-repeat bg-cover bg-center">
        <h2 className="text-primary text-center uppercase font-serif4 font-bold text-clamp-section-title mb-5 select-none">
          chất lượng đào tạo
        </h2>
        <p className="text-center m-auto max-w-[610px] mb-20 select-none">
          Lorem ipsum dolor sit amet, consectetur adispiscing elit. Nulla
          viverra, risus non lobortis feugigat, eros nisi gravida libero, a
          laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar
          tempor, ligula justo vestibulum lectus, in iaculis elit leo sit amet
          eros.
        </p>
        <div className="flex flex-col md:flex-row gap-30px pb-16">
          <TuyenSinhDaiHoc />
          <div className="flex-shrink-0 bg-[#D9D9D9] w-full min-h-[1px] md:w-[1px] md:min-h-full"></div>
          <TuyenSinhSauDaiHoc />
        </div>
      </div>
    </section>
  );
};
