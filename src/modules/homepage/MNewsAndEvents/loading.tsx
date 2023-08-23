"use client";

import { motion } from "framer-motion";

import { CButton } from "@/common/components/controls";
import { CPlayIcon } from "@/common/components/icons";
import { CSkeleton } from "@/common/components/others";

export const LNewsAndEvents = () => {
  return (
    <section className="mt-16">
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
            <CSkeleton
              isImage
              className="w-full h-full aspect-news-main rounded-inherit"
            />
            <div className="absolute bottom-0 left-0 right-0 px-3 py-5 m-5 bg-white rounded-inherit">
              <CSkeleton className="mb-3 w-20 text-sm " />
              <CSkeleton count={2} className="mb-3 text-xl leading-7" />
              <CSkeleton count={2} />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="rounded-10px relative"
          >
            <CSkeleton
              isImage
              className="w-full h-full aspect-news-video rounded-inherit"
            />
            <div className="absolute top-0 flex items-center justify-center z-1 w-full h-full rounded-inherit bg-[linear-gradient(0deg,_rgba(0,0,0,0.3),_rgba(0,0,0,0.3))]">
              <button className="play-btn">
                <CPlayIcon />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="rounded-10px relative"
          >
            <CSkeleton
              isImage
              className="w-full h-full aspect-news-sub rounded-inherit"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 m-5 bg-white rounded-inherit">
              <CSkeleton className="mb-3 w-20 text-sm " />
              <CSkeleton count={2} className="text-lg leading-6" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="relative"
        >
          <img
            src="/images/tuyensinh.png"
            alt=""
            className="mt-20 aspect-admissions w-full h-full"
          />
          <div className="absolute bottom-0 w-full text-center mb-30px">
            <CButton className="text-primary font-bold text-xl leading-6 px-6 py-[13px] rounded-15px bg-white shadow-[15px_15px_60px_rgba(19,70,131,0.15)]">
              Cổng thông tin tuyển sinh
            </CButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
