import { MPersonInfo } from "@/modules/council";

import "./styles.scss";

const SchoolCouncil = () => {
  return (
    <div className="font-montserrat">
      <div className="w-full h-[720px] bg-black"></div>
      <div className="w-full max-w-container m-auto px-30px">
        <div className="grid grid-cols-2 gap-[62px]">
          <div className="flex flex-col gap-9 justify-end">
            <div className="font-serif4 text-40px text-primary font-bold ">
              <div>TS. Nguyễn Thị Minh Hồng</div>
              <div className="line-council"></div>
            </div>
            <div className="text-16px font-normal text-black max-w-[400px]">
              Chủ tịch Hội đồng Trường Đại học Sư phạm Thành Phố Hồ Chí Minh
              nhiệm kỳ 2020 - 2025
            </div>
          </div>
          <div>
            <img src="/images/nthong.png" alt="" className="object-cover" />
          </div>
        </div>
        <div className="mt-[100px]">
          <div className="flex flex-col gap-[10px]">
            <div className="text-primary text-40px font-bold font-serif4">
              Danh sách thành viên hội đồng trường nhiệm kỳ 2020 - 2025
            </div>
            <span className="text-16px text-black font-normal">
              Kèm theo Quyết định số 2695/QĐ-BGDĐT ngày 21/09/2020 của Bộ trưởng
              Bộ Giáo dục và Đào tạo
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-[60px] mt-10">
            <MPersonInfo />
            <MPersonInfo />
            <MPersonInfo />
            <MPersonInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolCouncil;
