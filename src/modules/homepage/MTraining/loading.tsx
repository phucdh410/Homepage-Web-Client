"use client";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";

import { motion, Variants } from "framer-motion";

import {
  CAnimatedNumber,
  CMobileData,
  CSkeleton,
} from "@/common/components/others";
import { useMediaQuery } from "@/utils/hooks";

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

export const LTrainings = () => {
  const { currentWidth } = useMediaQuery();
  const d = useTranslations("global");

  return (
    <section className="mt-16">
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
          <CMobileData
            data={Array(5).fill({
              id: new Date() + Math.random().toString(),
              value: 0,
            })}
          />
        ) : (
          <div className="flex flex-wrap mx-4 md:m-auto !mb-10 bg-white relative items-baseline justify-between p-5 rounded-20px max-w-[850px]">
            <div className="shadow-[15px_15px_60px_rgba(19,70,131,0.1)] absolute rounded-inherit inset-0"></div>
            {Array(5)
              .fill({ id: new Date() + Math.random().toString(), value: 0 })
              .map((e, i) => (
                <div key={e.id + i} className="w-[130px] text-center">
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
          {Array(4)
            .fill("")
            .map((e, i) =>
              i === 0 ? (
                <motion.div
                  variants={sub}
                  key={e.id + new Date() + Math.random().toString()}
                  className="col-span-1 md:col-span-3 rounded-10px grid grid-cols-1 md:grid-cols-2"
                >
                  <div className="p-3 md:p-5 bg-white rounded-t-inherit md:rounded-l-inherit relative">
                    <CSkeleton className="mb-10px text-sm max-w-xs" />
                    <CSkeleton count={2} className=" text-xl mb-2 md:mb-5 " />
                    <CSkeleton count={4} className="text-sm mb-10" />
                    <Link
                      href="/"
                      className="hidden md:block text-primary absolute bottom-[calc(0px_+_20px)] right-[calc(0px_+_20px)]"
                    >
                      {d("read-more")}
                    </Link>
                  </div>
                  <CSkeleton
                    isImage
                    className="rounded-b-inherit md:rounded-r-inherit h-full"
                  />
                </motion.div>
              ) : (
                <motion.div
                  variants={sub}
                  key={e.id + new Date() + Math.random().toString()}
                  className="bg-white rounded-10px"
                >
                  <div className="p-3 md:p-5">
                    <CSkeleton className="mb-10px text-sm max-w-xs" />
                    <CSkeleton count={2} className=" text-xl mb-2 md:mb-5 " />
                  </div>

                  <div className=" hidden md:block bg-white aspect-training-sub rounded-b-inherit h-[220px]">
                    <CSkeleton
                      isImage
                      className="w-full h-inherit rounded-b-inherit"
                    />
                  </div>
                </motion.div>
              )
            )}
        </motion.div>
      </div>
    </section>
  );
};
