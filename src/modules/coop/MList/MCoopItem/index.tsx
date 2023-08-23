"use client";

import { motion } from "framer-motion";

import { IMCoopItemProps } from "../types";

export const MCoopItem = ({ data }: IMCoopItemProps) => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, type: "spring" },
      }}
      viewport={{ once: true }}
    >
      <img
        src={data.image}
        alt=""
        className="rounded-15px aspect-[409/300] w-full object-cover mb-5 select-none"
      />
      <h5 className="text-sub uppercase leading-26px tracking-0.48px mb-10px select-none">
        {data.tag}
      </h5>
      <h4 className="text-primary font-bold text-[25px] font-serif4 mb-10px cursor-pointer">
        {data.name}
      </h4>
      <p className="text-sub leading-26px tracking-0.48px line-clamp-5 select-none">
        {data.description}
      </p>
    </motion.div>
  );
};
