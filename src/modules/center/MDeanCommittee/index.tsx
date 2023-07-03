export const MDeanCommittee = () => {
  return (
    <section className="mt-16">
      <h3 className="text-primary font-bold text-[40px] font-serif4 text-center mb-5 uppercase">
        lãnh đạo phòng
      </h3>
      <p className="text-center max-w-[610px] m-auto mb-12 text-sub">
        Lorem ipsum dolor sit amet, consectetur adispiscing elit. Nulla viverra,
        risus non lobortis feugigat, eros nisi gravida libero, a laoreet velit
        enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor
      </p>
      <div className="grid grid-cols-2 grid-rows-2 gap-5">
        <div className="row-span-2 relative">
          <img
            src="/images/chunhiemkhoa1.png"
            alt=""
            className="object-cover"
          />
          <div className="absolute inset-0 m-[30px]">
            <div className="absolute bottom-0 text-white">
              <h3 className="mb-[11px] font-bold font-serif4 text-[40px] tracking-[1.2px]">
                TS. Nguyễn Viết Hưng
              </h3>
              <div className="h-[1px] bg-[linear-gradient(90deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_100%)] mb-6"></div>
              <p className="leading-[21px]">
                Trưởng khoa - Khoa Công Nghệ Thông Tin <br />
                Nhiệm kỳ 2020 - 2020
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/chunhiemkhoa2.png"
            alt=""
            className="object-cover"
          />
          <div className="m-[30px] absolute inset-0">
            <div className="absolute bottom-0 text-white">
              <h6 className="font-serif4 font-semibold text-xl mb-[15px]">
                TS. Trần Sơn Hải
              </h6>
              <p className="leading-[21px] tracking-[0.48px]">
                Phó Trưởng khoa - Khoa Công Nghệ Thông Tin <br />
                Nhiệm kỳ 2020 - 2020
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/chunhiemkhoa2.png"
            alt=""
            className="object-cover"
          />
          <div className="absolute inset-0 m-[30px]">
            <div className="absolute bottom-0 text-white">
              <h6 className="font-serif4 font-semibold text-xl mb-[15px]">
                TS. Trịnh Huy Hoàng
              </h6>
              <p className="leading-[21px] tracking-[0.48px]">
                Phó Trưởng khoa - Khoa Công Nghệ Thông Tin <br />
                Nhiệm kỳ 2020 - 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
