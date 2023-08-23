"use client";

import { motion, Variants } from "framer-motion";

import { CAnimatedNumber } from "../CAnimatedNumber";

import { ICMobileDataProps } from "./types";

const VARIANTS: Variants = {
  "initial-odd": {
    x: -100,
    opacity: 0,
  },
  "initial-even": {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.4,
    },
  },
};

export const CMobileData = ({ data }: ICMobileDataProps) => {
  return (
    <div className="mb-10">
      <ul className="flex flex-col mx-3">
        {data.map((e, i) => (
          <li
            key={e.id}
            className="flex relative odd:flex-row-reverse before:content-'' before:flex-1 before:mx-3 before:py-2 "
          >
            <div className="flex flex-col grow-0 shrink items-center">
              <span className="rounded-full bg-slate-500 p-1 my-2"></span>
              <span className="w-[2px] grow bg-slate-500"></span>
            </div>
            <motion.div
              variants={VARIANTS}
              initial={i % 2 === 0 ? "initial-odd" : "initial-even"}
              whileInView="animate"
              viewport={{ once: true }}
              className="flex-1 mx-3 mb-4 py-2 bg-white rounded-20px shadow-[15px_15px_60px_0px_rgba(19,_70,_131,_0.10)]"
            >
              <div className="px-1 text-center">
                <h3 className="mb-[5px] text-clamp1 leading-26px font-bold text-primary font-serif4">
                  <CAnimatedNumber to={e.value} />
                </h3>
                <p className="text-[14px] leading-20px text-sub font-montserrat">
                  {e.name}
                </p>
              </div>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};
