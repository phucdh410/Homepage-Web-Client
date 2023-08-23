"use client";

import { motion, Variants } from "framer-motion";

import { MNode } from "../MNode";
import { ITimelineDataProps } from "../types";

const ANIMATION_VARIANTS: Variants = {
  "initial-odd": {
    x: -200,
    opacity: 0,
  },
  "initial-even": {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      easings: ["easeOut"],
      type: "keyframes",
    },
  },
};

export const TypeTablet = ({ data }: ITimelineDataProps) => {
  return (
    <div className="relative m-auto py-10 mb-20">
      {data.map((e, i) => (
        <div
          key={e.id}
          className="w-full mb-32 flex gap-5 group even:flex-row-reverse"
        >
          <motion.div
            variants={ANIMATION_VARIANTS}
            initial={(i + 1) % 2 !== 0 ? "initial-odd" : "initial-even"}
            whileInView="animate"
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex justify-end gap-5 group-even:flex-row-reverse">
              <div className="rounded-full relative before:content-'' before:shadow-[-7px_-7px_12px_0px_#FFF,_7px_7px_20px_0px_#E0E0E0] before:p-[60px] before:bg-white before:absolute before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2">
                <img
                  src={e.avatar}
                  alt=""
                  className="rounded-full p-6 relative z-1"
                />
              </div>
              <h6 className="bg-red h-fit inline-block rounded-30px text-white whitespace-nowrap px-4 py-4 font-semibold font-raleway tracking-0.48px ">
                {e.time}
              </h6>
            </div>
          </motion.div>
          <MNode />
          <motion.div
            variants={ANIMATION_VARIANTS}
            initial={(i + 1) % 2 !== 0 ? "initial-even" : "initial-odd"}
            whileInView="animate"
            viewport={{ once: true }}
            className="flex-1 group-even:text-right"
          >
            <div className="rounded-30px bg-white inline-block">
              <h6 className="bg-primary text-left rounded-t-inherit rounded-b-[10px] px-30px py-[17px] text-white font-serif4 font-bold">{`Trưởng khoa: ${e.lead}`}</h6>
              <ul className="px-30px py-5 text-left rounded-b-inherit shadow-[15px_15px_60px_0px_rgba(19,_70,_131,_0.10)]">
                {e.subs.map((el, i) => (
                  <li key={i} className="mb-[15px] last:mb-0">
                    {`Phó Trưởng khoa: ${el}`}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      ))}

      <div
        className="w-[5px] h-full absolute top-0 left-1/2 -translate-x-1/2 rounded-[5px]"
        style={{
          background:
            "linear-gradient(180deg, rgb(231 231 231 / 0%) 0%, rgb(228 227 227 / 79%) 49.94%, rgb(237 237 237) 100%)",
        }}
      ></div>
    </div>
  );
};
