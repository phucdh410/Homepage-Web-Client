"use client";

import { motion, Variants } from "framer-motion";

import "./styles.scss";

const variants: Variants = {
  initialTop: { opacity: 0, y: -400 },
  initialBottom: { opacity: 0, y: 150 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" } },
};

export const MMission = () => {
  return (
    <div
      id="mission"
      className="mission flex md:gap-12 gap-6 h-auto text-white scroll-mt-header"
    >
      <motion.div
        variants={variants}
        initial="initialTop"
        whileInView="animate"
        viewport={{ once: true }}
        className="md:w-2/3 w-1/3 text-right font-serif4 my-auto text-40px font-bold"
      >
        Sứ mạng
      </motion.div>
      <div className="line" />
      <motion.div
        variants={variants}
        initial="initialBottom"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-1/2 font-montserrat text-16px"
      >
        Trường Đại học Sư phạm Thành phố Hồ Chí Minh là trường đại học sư phạm
        trọng điểm Quốc gia, đào tạo đại học, sau đại học, tổ chức nghiên cứu về
        giáo dục và các ngành khoa học khác để phục vụ tốt nhu cầu đào tạo giáo
        viên chất lượng cao, nhu cầu nghiên cứu đạt trình độ tiên tiến, phục vụ
        cho sự nghiệp giáo dục và phát triển kinh tế - xã hội của các tỉnh thành
        phía Nam và cả nước.
      </motion.div>
    </div>
  );
};
