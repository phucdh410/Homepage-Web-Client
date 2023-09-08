"use client";

import { useMemo } from "react";

import classNames from "classnames";
import { motion, Variants } from "framer-motion";

import { MTimelineNodeIcon } from "./MTimelineNodeIcon";

const MOCK = [
  {
    id: 1,
    year: 1957,
    name: "Tiền thân của Trường là Đại học Sư phạm Sài Gòn",
    nodes: [
      {
        id: 1,
        year: 1960,
        content:
          "1965: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus",
        image: "/images/history.png",
      },
      {
        id: 2,
        year: 1970,
        content:
          "1965: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus",
        image: "/images/history.png",
      },
      {
        id: 3,
        year: 1986,
        content:
          "1965: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus",
        image: "/images/history.png",
      },
      {
        id: 4,
        year: 1990,
        content:
          "1965: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus",
        image: "/images/history.png",
      },
      {
        id: 5,
        year: 1996,
        content:
          "1965: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus",
        image: "/images/history.png",
      },
    ],
  },
  {
    id: 2,
    year: 2000,
    name: "Lorem ipsum dolor sit amet consectetur adipiscing elit nulla viverra",
    nodes: [
      {
        id: 1,
        year: 1960,
        content:
          "1965: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus",
        image: "/images/history.png",
      },
      {
        id: 2,
        year: 1970,
        content:
          "1965: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus",
        image: "/images/history.png",
      },
    ],
  },
  {
    id: 3,
    year: 2023,
    name: "Ngôi làng đầy lá của cậu bé tóc vàng mồ côi cha mẹ, bị yêu hồ nhập vào bao tử",
    nodes: [
      {
        id: 1,
        year: 1960,
        content:
          "1965: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus",
        image: "/images/history.png",
      },
    ],
  },
];

const titleVariants: Variants = {
  initial: { y: 150, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};
const variants: Variants = {
  initialLeft: { x: -150, opacity: 0 },
  initialRight: { x: 150, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const MTimeline = () => {
  //#region Data
  const _items = useMemo(() => {
    let _index = -1;
    return MOCK.map(({ nodes, ..._item }) => {
      return {
        ..._item,
        nodes: nodes.map((_node) => {
          return {
            ..._node,
            right: ++_index % 2 === 0,
          };
        }),
      };
    });
  }, []);
  //#endregion

  //#region Render
  return (
    <section className="mt-16">
      <div className="container">
        <div className="mx-3 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-14">
          {_items.map((headTime) => (
            <motion.div
              variants={titleVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              key={headTime.id}
            >
              <div className="head-time-title my-30px select-none text-center m-auto max-w-[450px] text-primary">
                <h5 className="text-35px tracking-1.05px font-extrabold mb-10px">
                  {headTime.year}
                </h5>
                <p className="text-25px font-bold tracking-0.75px font-serif4">
                  {headTime.name}
                </p>
              </div>
              <div className="relative py-16 hidden lg:block">
                <div className="absolute w-[3px] min-h-full top-0 left-1/2 translate-x-[calc(-50%+0.5px)] bg-red"></div>
                {headTime.nodes.map((timeNode) => (
                  <div
                    key={timeNode.id}
                    className={classNames(
                      timeNode.right ? "flex-row" : "flex-row-reverse",
                      "flex justify-center mb-28 last:mb-0"
                    )}
                  >
                    <motion.img
                      variants={variants}
                      initial={timeNode.right ? "initialLeft" : "initialRight"}
                      whileInView="animate"
                      viewport={{ once: true }}
                      src={timeNode.image}
                      className="rounded-10px aspect-[369/235]"
                      alt=""
                    />
                    <MTimelineNodeIcon className="shrink-0 -mt-20px z-1" />
                    <motion.div
                      variants={variants}
                      initial={!timeNode.right ? "initialLeft" : "initialRight"}
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="max-w-[369px]"
                    >
                      <h6
                        className={classNames(
                          timeNode.right ? "text-left" : "text-right",
                          "pb-3 text-primary text-25px font-semibold tracking-0.75px mb-10px"
                        )}
                      >
                        {timeNode.year}
                      </h6>
                      <div className="bg-primary p-15px rounded-15px text-white">
                        {timeNode.content}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
              <div className="relative pb-8 block lg:hidden">
                <div className="absolute w-[3px] min-h-full top-0 bg-red"></div>
                {headTime.nodes.map((timeNode) => (
                  <div key={timeNode.id} className="pl-3 mb-10">
                    <div className="flex items-center">
                      <MTimelineNodeIcon />
                      <h6 className="text-primary font-bold text-2xl">
                        {timeNode.year}
                      </h6>
                    </div>
                    <img
                      src={timeNode.image}
                      alt=""
                      className="rounded-10px mb-10px drop-shadow-[0px_0px_2px_black]"
                    />
                    <div className="rounded-10px bg-primary p-10px text-white">
                      {timeNode.content}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          <p className="max-w-[700px] mt-10 mb-16 text-center m-auto">
            Hiện nay trường là một trong 22 trường Đại học trọng điểm Quốc gia
            và là 1 trong 2 trường Đại học Sư phạm trọng điểm của cả nước, đóng
            vai trò nóng cốt, đầu tàu đối với hệ thống các trường sư phạm và phổ
            thông ở phía Nam. Bộ GD & ĐT, Ủy ban nhân dân TP.HCM và các địa
            phương tặng nhiều Bằng khen cho các hoạt động đào tạo, NCKH, phong
            trào, đoàn thể của Trường.
          </p>
        </div>
      </div>
    </section>
  );
  //#endregion
};
