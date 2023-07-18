"use client";

import { motion, Variants } from "framer-motion";

import { MNode } from "./MNode";

const MOCK = [
  {
    id: "1",
    avatar: "/images/avatar.png",
    time: "09/2020 - 10/2023",
    lead: "TS. Nguyễn Viết Hưng",
    subs: ["TS. Nguyễn Viết Hưng", "ThS. Trịnh Huy Hoàng"],
  },
  {
    id: "2",
    avatar: "/images/avatar.png",
    time: "09/2020 - 10/2023",
    lead: "TS. Nguyễn Viết Hưng",
    subs: ["TS. Nguyễn Viết Hưng", "ThS. Trịnh Huy Hoàng"],
  },
  {
    id: "3",
    avatar: "/images/avatar.png",
    time: "09/2020 - 10/2023",
    lead: "TS. Nguyễn Viết Hưng",
    subs: ["TS. Nguyễn Viết Hưng", "ThS. Trịnh Huy Hoàng"],
  },
  {
    id: "4",
    avatar: "/images/avatar.png",
    time: "09/2020 - 10/2023",
    lead: "TS. Nguyễn Viết Hưng",
    subs: ["TS. Nguyễn Viết Hưng", "ThS. Trịnh Huy Hoàng"],
  },
  {
    id: "5",
    avatar: "/images/avatar.png",
    time: "09/2020 - 10/2023",
    lead: "TS. Nguyễn Viết Hưng",
    subs: ["TS. Nguyễn Viết Hưng", "ThS. Trịnh Huy Hoàng"],
  },
  {
    id: "6",
    avatar: "/images/avatar.png",
    time: "09/2020 - 10/2023",
    lead: "TS. Nguyễn Viết Hưng",
    subs: ["TS. Nguyễn Viết Hưng", "ThS. Trịnh Huy Hoàng"],
  },
];

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

export const MTimelineTag = () => {
  return (
    <section className="mt-16">
      <h3 className="text-center uppercase text-primary font-serif4 text-clamp-section-title font-bold mb-5">
        lãnh đạo qua các thời kì
      </h3>
      <p className="m-auto mb-12 text-center max-w-[610px] text-sub">
        Lorem ipsum dolor sit amet, consectetur adispiscing elit. Nulla viverra,
        risus non lobortis feugigat, eros nisi gravida libero, a laoreet velit
        enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor
      </p>

      <div className="relative m-auto py-10 mb-20">
        {MOCK.map((e, i) => (
          <div
            key={e.id}
            className="w-full mb-32 flex gap-30px group even:flex-row-reverse"
          >
            <motion.div
              variants={ANIMATION_VARIANTS}
              initial={(i + 1) % 2 !== 0 ? "initial-odd" : "initial-even"}
              whileInView="animate"
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="flex justify-end gap-20 group-even:flex-row-reverse">
                <div className="rounded-full relative before:content-'' before:shadow-[-7px_-7px_12px_0px_#FFF,_7px_7px_20px_0px_#E0E0E0] before:p-[100px] before:bg-white before:absolute before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2">
                  <img
                    src={e.avatar}
                    alt=""
                    className="rounded-full relative p-5 z-1"
                  />
                </div>
                <h6 className="bg-red h-fit inline-block rounded-30px text-white px-30px py-4 font-semibold font-raleway tracking-[0.48px] ">
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
    </section>
  );
};
