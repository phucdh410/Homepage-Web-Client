"use client";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";

import { motion } from "framer-motion";

import { CELearningIcon, CSmartLibraryIcon } from "@/common/components/icons";

export const MCooperation = () => {
  //#region Data
  const d = useTranslations("global");
  //#endregion

  return (
    <section
      className="mt-16 scroll-m-header-plus"
      id="collaborate-and-serve-the-community"
    >
      <div className="container">
        <div className="max-w-2xl m-auto mb-5 md:mb-10 px-5">
          <h2 className="text-center mb-10px uppercase text-primary text-clamp-home-section-title leading-48px font-extrabold font-serif4 ">
            hợp tác và phục vụ cộng đồng
          </h2>
          <p className="text-center text-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-10 mx-4 md:mx-10 mb-10 md:mb-28">
          <motion.div
            initial={{ x: -100, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            whileHover={{
              x: 10,
              y: -10,
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
              transition: { duration: 0.2 },
            }}
            className="basis-1/2 rounded-10px md:rounded-20px relative overflow-hidden shadow-custom"
          >
            <Link href="/coop?tab=1">
              <img
                src="/images/coop.png"
                alt=""
                className="aspect-coop w-full object-cover rounded-inherit"
              />
              <div className="absolute w-full bottom-0 bg-white text-center py-3 md:p-[15px] rounded-b-inherit">
                <p className="text-primary font-serif4 text-[clamp(0.875rem,_0.7331rem_+_0.6054vw,_1.25rem)] uppercase font-bold rounded-b-inherit">
                  hợp tác trong nước
                </p>
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 100, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            whileHover={{
              x: 10,
              y: -10,
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
              transition: { duration: 0.2 },
            }}
            className="basis-1/2 rounded-10px md:rounded-20px relative overflow-hidden shadow-custom"
          >
            <Link href="/coop?tab=2">
              <img
                src="/images/coop.png"
                alt=""
                className="aspect-coop w-full object-cover rounded-inherit"
              />
              <div className="absolute w-full bottom-0 bg-white text-center py-3 md:p-[15px] rounded-b-inherit">
                <p className="text-primary font-serif4 text-[clamp(0.875rem,_0.7331rem_+_0.6054vw,_1.25rem)] uppercase font-bold rounded-b-inherit">
                  hợp tác quốc tế
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      <div
        className="bg-[url('/images/ensure.png')] bg-no-repeat bg-center bg-cover p-5 md:p-12 mb-10 md:mb-24 scroll-m-header-plus"
        id="ensuring-quality-of-education"
      >
        <div className="max-w-2xl m-auto mb-10">
          <h2 className="text-center mb-10px uppercase text-white text-clamp-home-section-title leading-48px font-extrabold font-serif4 ">
            bảo đảm chất lượng giáo dục
          </h2>
          <p className="text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-10 max-w-[892px] m-auto">
          <motion.div
            initial={{ x: -200, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="basis-1/2 rounded-20px flex flex-col items-center justify-between gap-5 py-5 px-4 shadow-custom bg-white"
          >
            <h5 className="text-primary text-3xl font-serif4 font-bold text-center leading-10">
              Kiểm định cấp
              <br />
              Cơ sở đào tạo
            </h5>
            <p className="text-sub text-center px-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <button className="text-white bg-primary rounded-15px px-5 py-3">
              {d("read-more")}
            </button>
          </motion.div>
          <motion.div
            initial={{ x: 200, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="basis-1/2 rounded-20px flex flex-col items-center justify-between gap-5 py-5 px-4 shadow-custom bg-white"
          >
            <h5 className="text-primary text-3xl font-serif4 font-bold text-center leading-10">
              Kiểm định cấp
              <br />
              Chương trình đào tạo
            </h5>
            <p className="text-sub text-center px-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <button className="text-white bg-primary rounded-15px px-5 py-3">
              {d("read-more")}
            </button>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-5 md:mx-auto pb-16 items-center justify-center gap-5 md:gap-10 max-w-[892px] min-h-[260px] md:min-h-[321px]">
        <motion.div
          initial={{ x: -200, y: 100, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="basis-1/2 min-h-[inherit] rounded-20px flex flex-col items-center justify-center gap-5 py-5 px-4 shadow-custom bg-white"
        >
          <CSmartLibraryIcon />
          <h5 className="font-serif4 font-bold text-primary text-3xl text-center">
            Smart Library
          </h5>
          <p className="text-sub text-center px-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 200, y: 100, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="basis-1/2 min-h-[inherit] rounded-20px flex flex-col items-center justify-center gap-5 py-5 px-4 shadow-custom bg-white"
        >
          <CELearningIcon />
          <h5 className="font-serif4 font-bold text-primary-red text-3xl text-center">
            E-Learning
          </h5>
          <p className="text-sub text-center px-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </motion.div>
      </div>
    </section>
  );
};
