import "./styles.scss";

export const MLead = () => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-[62px]">
      <div className="order-2 md:order-1 flex flex-col gap-5 md:gap-9 justify-end">
        <div className="font-serif4 text-2xl sm:text-3xl md:text-40px text-primary font-bold ">
          <div>TS. Nguyễn Thị Minh Hồng</div>
          <div className="line-council" />
        </div>
        <div className="text-16px font-normal text-black max-w-[400px]">
          Chủ tịch Hội đồng Trường Đại học Sư phạm Thành Phố Hồ Chí Minh nhiệm
          kỳ 2020 - 2025
        </div>
      </div>
      <div className="order-1 md:order-2">
        <img src="/images/nthong.png" alt="" className="object-cover" />
      </div>
    </div>
  );
};
