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

export const TypeMobile = ({ data }: ITimelineDataProps) => {
  return (
    <div className="relative m-auto py-10 px-5 xs:px-10 mb-20">
      <ul>
        {data.map((e, i) => (
          <li
            key={e.id}
            className="pl-5 pb-20 last:pb-0 border-l-[2px] border-solid border-gray-400"
          >
            <div className="relative flex items-center gap-5 before:content-'' before:absolute before:rounded-full before:w-7 before:h-7 before:bg-white before:border-solid before:border-[#124874] before:border-[6px] before:-left-[35px]">
              <h6 className="bg-red whitespace-nowrap h-fit inline-block rounded-20px text-white px-4 py-2 font-semibold font-raleway tracking-0.48px ">
                {e.time}
              </h6>
              <div className="rounded-full max-w-[100px] relative before:content-'' before:shadow-[-7px_-7px_12px_0px_#FFF,_7px_7px_20px_0px_#E0E0E0] before:p-[50px] before:bg-white before:absolute before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2">
                <img
                  src={e.avatar}
                  alt=""
                  className="rounded-full relative p-2 z-1"
                />
              </div>
            </div>

            <div className="rounded-30px bg-white inline-block mt-2">
              <h6 className="bg-primary text-left rounded-t-inherit px-4 py-3 text-white font-serif4 font-bold">{`Trưởng khoa: ${e.lead}`}</h6>
              <ul className="px-4 py-3 text-left rounded-b-inherit shadow-[15px_15px_60px_0px_rgba(19,_70,_131,_0.10)]">
                {e.subs.map((el, i) => (
                  <li key={i} className="mb-[15px] last:mb-0">
                    {`Phó Trưởng khoa: ${el}`}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
