"use client";

import Link from "next/link";

import { motion, Variants } from "framer-motion";

import { CAnimatedNumber, CMobileData } from "@/common/components/others";
import { useMediaQuery } from "@/utils/hooks";

const MOCK = [
  {
    id: "1",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "2",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "4",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
  },
];

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

export const MTraining = () => {
  //#region Data
  const { currentWidth } = useMediaQuery();

  //#endregion

  return (
    <section className="mt-16">
      <div className="container">
        <div className="max-w-2xl m-auto mb-10">
          <h2 className="text-center mb-[10px] uppercase text-primary text-[35px] leading-[48px] font-extrabold font-serif4 ">
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
          <div className="flex flex-wrap mx-4 md:mx-0 mb-10 bg-white relative m-auto items-baseline justify-between p-5 rounded-20px max-w-[850px]">
            <div className="shadow-[15px_15px_60px_rgba(19,70,131,0.1)] absolute rounded-inherit inset-0"></div>
            {MOCK1.map((e) => (
              <div key={e.id} className="w-[130px] text-center">
                <h3 className="mb-[5px] text-clamp1 leading-[48px] font-bold text-primary font-serif4">
                  <CAnimatedNumber to={e.value} />
                </h3>
                <p className="text-[16px] leading-[20px] text-sub font-montserrat">
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
          {MOCK.map((e, i) =>
            i === 0 ? (
              <motion.div
                variants={sub}
                key={e.id}
                className="col-span-1 md:col-span-3 rounded-10px grid grid-cols-1 md:grid-cols-2"
              >
                <div className="p-3 md:p-5 bg-white rounded-t-inherit md:rounded-l-inherit relative">
                  <p className="uppercase text-sm text-sub2 mb-[10px]">
                    Đại học chính quy
                  </p>
                  <h4 className="text-primary font-serif4 text-xl mb-2 md:mb-5 line-clamp-3 font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </h4>
                  <p className="line-clamp-2 md:line-clamp-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <Link
                    href="/"
                    className="hidden md:block text-primary absolute bottom-[calc(0px_+_20px)] right-[calc(0px_+_20px)]"
                  >
                    Xem thêm
                  </Link>
                </div>
                <img
                  className="rounded-b-inherit md:rounded-r-inherit"
                  src="/images/training1.png"
                  alt=""
                />
              </motion.div>
            ) : (
              <motion.div
                variants={sub}
                key={e.id}
                className="bg-white rounded-10px"
              >
                <div className="p-3 md:p-5">
                  <p className="uppercase text-sm text-sub2 mb-[10px]">
                    Đại học chính quy
                  </p>
                  <h4 className="text-primary font-serif4 text-xl line-clamp-2 lg:line-clamp-3 font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </h4>
                </div>

                <img
                  src="/images/training2.png"
                  alt=""
                  className="w-full hidden md:block aspect-training-sub object-cover rounded-b-inherit"
                />
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};
