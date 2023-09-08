"use client";

import { motion } from "framer-motion";

import { IMPersonInfoProps } from "./types";

export const MPersonInfo = ({ data }: IMPersonInfoProps) => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, bounce: 0.3, type: "spring" },
      }}
      viewport={{ once: true }}
      className="flex flex-col gap-2 md:gap-5"
    >
      <img src={data.image} alt="" className="object-cover rounded-2xl" />
      <div className="px-2 md:px-5">
        <div className="mb-2 md:mb-4 text-primary font-serif4 font-semibold text-xl">
          {data.name}
        </div>
        <div className="text-black text-16px font-normal">{data.position}</div>
      </div>
    </motion.div>
  );
};
