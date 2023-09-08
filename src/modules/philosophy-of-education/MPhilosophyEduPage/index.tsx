"use client";

import { motion, Variants } from "framer-motion";

import { CFeaturedEvents } from "@/common/components/layouts";

import "./styles.scss";

const variants: Variants = {
  initial: { opacity: 0, y: 200, scale: 0.2 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, bounce: 0.3, type: "spring" },
  },
};

export const MPhilosophyEduPage = () => {
  return (
    <div>
      <div className="w-full max-w-container m-auto">
        <div className="px-30px">
          {/* Introduction */}
          <div className="flex gap-10 mt-14 flex-wrap md:flex-nowrap">
            <div className="md:w-1/2 h-auto flex flex-col justify-end">
              <div className="font-serif4 text-[300px] text-primary">
                <img src="/icons/Text.png" alt="" className="object-contain" />
              </div>
              <div className="font-serif4 text-primary font-bold text-40px mb-5 line-clamp-2">
                Đào tạo người học đạt chuẩn
              </div>
              <div className="font-montserrat text-sub text-16px">
                Trường Đại học Sư phạm Thành phố Hồ Chí Minh tuân thủ quan điểm
                giáo dục nhằm đào tạo người học đạt chuẩn: trở thành người làm
                nghề chuyên nghiệp, có đạo đức, có kỷ luật, có trách nhiệm với
                cộng đồng và thích ứng cao.
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/intro.png"
                alt=""
                className="object-cover rounded-15px"
              />
            </div>
          </div>

          <div className="flex rounded-15px justify-end mt-60px mb-10 system">
            <motion.div
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="lg:w-1/2 w-full text-white"
            >
              <div className="font-serif4 font-bold text-40px mb-5 line-clamp-4">
                Hệ thống, linh hoạt, đảm bảo gắn đào tạo với thực hành - ứng
                dụng
              </div>
              <div className="text-16px font-montserrat">
                Trường xây dựng môi trường giáo dục kiến tạo, hướng đến người
                học - nhân vật trung tâm của hoạt động giáo dục. Hoạt động giáo
                dục tổ chức hệ thống, linh hoạt, đảm bảo gắn đào tạo với thực
                hành - ứng dụng, hướng đến sự thích ứng xã hội và nghề nghiệp để
                thành công và hạnh phúc. Các bên có liên quan đến hoạt động giáo
                dục của Trường cam kết đồng hành, hỗ trợ cho công tác giáo dục
                một cách hiệu quả.
              </div>
            </motion.div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-10">
            <div className="text-primary font-serif4 font-bold text-40px md:w-1/2 lg:line-clamp-2">
              Tôn trọng sụ khác biệt, khuyến khích phát triển nội lục
            </div>
            <div className="md:w-1/2 text-sub font-montserrat text-16px">
              Trường tôn trọng và xem văn hóa chất lượng trong giáo dục là tôn
              chỉ hoạt động. Trường sử dụng đa dạng các phương thức giáo dục,
              phương pháp đào tạo tôn trọng sự khác biệt, khuyến khích phát
              triển nội lực, tư duy tích cực, kỹ năng nghề nghiệp, kỹ năng mềm
              và hứng thú nghề nghiệp.
            </div>
          </div>
        </div>
        <CFeaturedEvents background />
        {/* <CTimeline /> */}
      </div>
    </div>
  );
};
