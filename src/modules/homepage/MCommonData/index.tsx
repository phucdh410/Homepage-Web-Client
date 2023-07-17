import { CAnimatedNumber } from "@/common/components/others";

import "./styles.scss";

export const MCommonData = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3  sm:grid-cols-3 sm:grid-rows-2 place-items-center lg:flex bg-white mt-10 md:-mt-14 xl:-mt-24 relative z-[1] homepage-common-data m-auto items-baseline justify-between p-5 rounded-20px max-w-[90%] sm:max-w-[85%] xl:max-w-[850px]">
      <div className="hidden lg:block shadow-[15px_15px_60px_rgba(19,70,131,0.1),15px_15px_60px_rgba(19,70,131,0.1)] absolute rounded-inherit inset-0"></div>
      <div className="w-[118px] text-center">
        <h3 className="mb-[5px] leading-[48px] font-bold text-primary font-serif4">
          <CAnimatedNumber to={1976} />
        </h3>
        <p className="text-base leading-[20px] text-sub font-montserrat">
          Thành lập
        </p>
      </div>
      <div className="w-[118px] text-center">
        <h3 className="mb-[5px] leading-[48px] font-bold text-primary font-serif4">
          <CAnimatedNumber to={3} />
        </h3>
        <p className="text-base leading-[20px] text-sub font-montserrat">
          Trường thành viên
        </p>
      </div>
      <div className="w-[118px] text-center">
        <h3 className="mb-[5px] leading-[48px] font-bold text-primary font-serif4">
          <CAnimatedNumber to={15} />
        </h3>
        <p className="text-base leading-[20px] text-sub font-montserrat">
          Phòng
        </p>
      </div>
      <div className="w-[118px] text-center">
        <h3 className="mb-[5px] leading-[48px] font-bold text-primary font-serif4">
          <CAnimatedNumber to={1} />
        </h3>
        <p className="text-base leading-[20px] text-sub font-montserrat">
          Phân hiệu
        </p>
      </div>
      <div className="w-[118px] text-center">
        <h3 className="mb-[5px] leading-[48px] font-bold text-primary font-serif4">
          <CAnimatedNumber to={16} />
        </h3>
        <p className="text-base leading-[20px] text-sub font-montserrat">
          Khoa
        </p>
      </div>
      <div className="w-[118px] text-center">
        <h3 className="mb-[5px] leading-[48px] font-bold text-primary font-serif4">
          <CAnimatedNumber to={30747} />
        </h3>
        <p className="text-base leading-[20px] text-sub font-montserrat">
          Sinh viên
        </p>
      </div>
    </div>
  );
};
