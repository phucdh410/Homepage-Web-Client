"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { CVideoPlayer } from "@/common/components/controls";
import { CPlayIcon } from "@/common/components/icons";
import { CModal } from "@/common/components/others";

import { INewsAndEventsProps } from "./types";

import "./styles.scss";

export const MUi = ({ data }: INewsAndEventsProps) => {
  //#region Data
  const [open, setOpen] = useState<boolean>(false);
  //#endregion

  //#region Event
  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);
  //#endregion

  //#region Render
  return (
    <section className="mt-16 scroll-m-header-plus" id="news-and-events">
      <div className="container">
        <div className="max-w-md m-auto mb-10 px-5">
          <h2 className="text-center mb-10px uppercase text-primary text-clamp-home-section-title leading-48px font-extrabold font-serif4 ">
            tin tức - sự kiện
          </h2>
          <p className="text-center text-sub">
            Nhanh chóng kịp thời, liên tục cập nhật những sự kiện mới nhất đến
            với cán bộ, sinh viên
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 max-w-[94%] m-auto">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="row-span-2 rounded-10px relative"
          >
            <img
              src={data[0].image}
              alt=""
              className="w-full h-full aspect-news-main rounded-inherit"
            />
            <div className="absolute bottom-0 px-3 py-5 m-5 bg-white rounded-inherit">
              <p className="uppercase font-light text-sm text-sub2 mb-3">
                {data[0].tag}
              </p>
              <h4 className="line-clamp-2 mb-3 text-primary font-bold text-xl leading-7">
                {data[0].title}
              </h4>
              <p className="font-light text-sub line-clamp-2">
                {data[0].description}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="rounded-10px relative"
          >
            <img
              src={data[1].image}
              alt=""
              className="w-full h-full aspect-news-video rounded-inherit"
            />
            <div className="absolute top-0 flex items-center justify-center z-1 w-full h-full rounded-inherit bg-[linear-gradient(0deg,_rgba(0,0,0,0.3),_rgba(0,0,0,0.3))]">
              <button className="play-btn" onClick={onOpen}>
                <CPlayIcon />
              </button>
              <CModal open={open} onClose={onClose}>
                <CVideoPlayer src={data[1].video || ""} />
              </CModal>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="rounded-10px relative"
          >
            <img
              src={data[2].image}
              alt=""
              className="w-full h-full aspect-news-sub rounded-inherit"
            />
            <div className="absolute bottom-0 p-3 m-5 bg-white rounded-inherit">
              <p className="uppercase font-light text-sm text-sub2 mb-[5px]">
                {data[2].tag}
              </p>
              <h4 className="line-clamp-2 text-primary font-bold text-xl leading-7">
                {data[2].title}
              </h4>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="relative scroll-m-header-plus"
          id="admissions"
        >
          <img
            src="/images/tuyensinh.png"
            alt=""
            className="mt-20 aspect-admissions w-full h-full"
          />
          <div className="absolute bottom-0 w-full text-center mb-30px">
            <a
              href="http://tuyensinh.hcmue.edu.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold text-xl leading-6 px-6 py-[13px] rounded-15px bg-white shadow-[15px_15px_60px_rgba(19,70,131,0.15)]"
            >
              Cổng thông tin tuyển sinh
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
  //#endregion
};
