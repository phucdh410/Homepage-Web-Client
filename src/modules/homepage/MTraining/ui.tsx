"use client";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";

import { motion, Variants } from "framer-motion";

import { CAnimatedNumber, CMobileData } from "@/common/components/others";
import { useMediaQuery } from "@/utils/hooks";

import { IMTrainingProps } from "./types";

const MOCK1 = [
  { id: "1", name: "Giáo sư", value: 25 },
  { id: "2", name: "Phó giáo sư", value: 25 },
  { id: "3", name: "Tiến sĩ", value: 175 },
  { id: "4", name: "Thạc sĩ", value: 335 },
  { id: "5", name: "Chuyên gia quốc tế", value: 150 },
];

const container: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { staggerChildren: 0.3, duration: 0.8 },
  },
};

const sub: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const MUi = ({ data }: IMTrainingProps) => {
  //#region Data
  const { currentWidth } = useMediaQuery();

  const d = useTranslations("global");
  //#endregion

  return (
    <section className="mt-16 scroll-m-header-plus" id="training">
      <div className="container">
        <div className="max-w-2xl m-auto mb-10 px-5">
          <h2 className="text-center mb-10px uppercase text-primary text-clamp-home-section-title leading-48px font-extrabold font-serif4 ">
            đào tạo
          </h2>
          <p className="text-center text-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {currentWidth < 768 ? (
          <CMobileData data={MOCK1} />
        ) : (
          <div className="flex flex-wrap mx-4 md:m-auto !mb-10 bg-white relative items-baseline justify-between p-5 rounded-20px max-w-[850px]">
            <div className="shadow-[15px_15px_60px_rgba(19,70,131,0.1)] absolute rounded-inherit inset-0" />
            {MOCK1.map((e) => (
              <div key={e.id} className="w-[130px] text-center">
                <h3 className="mb-[5px] text-clamp1 leading-48px font-bold text-primary font-serif4">
                  <CAnimatedNumber to={e.value} />
                </h3>
                <p className="text-base leading-20px text-sub font-montserrat">
                  {e.name}
                </p>
              </div>
            ))}
          </div>
        )}

        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 px-3 md:px-0 gap-3 md:gap-10"
        >
          {data.map((e, i) =>
            i === 0 ? (
              <motion.div
                variants={sub}
                key={e.id}
                className="col-span-1 md:col-span-3 rounded-10px grid grid-cols-1 md:grid-cols-2"
              >
                <div className="p-3 md:p-5 bg-white rounded-t-inherit md:rounded-l-inherit relative">
                  <p className="uppercase text-sm text-sub2 mb-10px">{e.tag}</p>
                  <h4 className="text-primary font-serif4 text-xl mb-2 md:mb-5 line-clamp-3 font-bold">
                    {e.title}
                  </h4>
                  <p className="line-clamp-2 md:line-clamp-4">
                    {e.description}
                  </p>
                  <Link
                    href="/"
                    className="hidden md:block text-primary absolute bottom-[calc(0px_+_20px)] right-[calc(0px_+_20px)]"
                  >
                    {d("read-more")}
                  </Link>
                </div>
                <img
                  className="rounded-b-inherit md:rounded-r-inherit"
                  src={e.image}
                  alt=""
                />
              </motion.div>
            ) : (
              <Link href="" key={e.id}>
                <motion.div
                  variants={sub}
                  className="bg-white rounded-10px group overflow-hidden transition-shadow duration-200 hover:shadow-hover-item"
                >
                  <div className="p-3 md:p-5">
                    <p className="uppercase text-sm text-sub2 mb-10px">
                      {e.tag}
                    </p>
                    <h4 className="text-primary font-serif4 text-xl line-clamp-2 lg:line-clamp-3 font-bold">
                      {e.title}
                    </h4>
                  </div>

                  <img
                    src={e.image}
                    alt=""
                    className="w-full hidden md:block aspect-training-sub object-cover rounded-b-inherit transition-all duration-500 group-hover:scale-105"
                  />
                </motion.div>
              </Link>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};
