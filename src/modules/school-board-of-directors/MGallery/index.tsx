const MOCK = [
  {
    id: "1",
    name: "GS. TS. Huỳnh Văn Sơn",
    position: "Hiệu trưởng Trường Đại học Sư phạm",
    term: "Thành Phố Hồ Chí Minh nhiệm kỳ 202x - 202x",
    image: "/images/bangiamhieu1.png",
  },
  {
    id: "2",
    name: "TS. Bùi Trần Quỳnh Ngọc",
    position: "Phó Hiệu trưởng Trường Đại học Sư phạm",
    term: "Thành Phố Hồ Chí Minh nhiệm kỳ 202x - 202x",
    image: "/images/bangiamhieu2.png",
  },
  {
    id: "3",
    name: "ThS. Nguyễn Ngọc Trung",
    position: "Phó Hiệu trưởng Trường Đại học Sư phạm",
    term: "Thành Phố Hồ Chí Minh nhiệm kỳ 202x - 202x",
    image: "/images/bangiamhieu3.png",
  },
  {
    id: "4",
    name: "TS. Cao Anh Tuấn",
    position: "Phó Hiệu trưởng Trường Đại học Sư phạm",
    term: "Thành Phố Hồ Chí Minh nhiệm kỳ 202x - 202x",
    image: "/images/bangiamhieu4.png",
  },
];

export const MGallery = () => {
  return (
    <div className="container mt-header mb-20 grid gap-5 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 select-none">
      <div className="col-span-1 md:col-span-2 2xl:col-span-3 relative">
        <img src={MOCK[0].image} alt="" />
        <div className="absolute left-5 2xl:left-[90px] top-1/2 -translate-y-1/2 text-white">
          <h3 className="font-serif4 font-bold tracking-1.2px text-clamp40px">
            {MOCK[0].name}
          </h3>
          <div className="my-divider mt-10px mb-3 2xl:mb-7 min-h-[1px] w-full bg-[linear-gradient(90deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_100%)]" />
          <p className="text-clamp16px leading-21px tracking-0.48px">
            {MOCK[0].position}
          </p>
          <p className="text-clamp16px leading-21px tracking-0.48px">
            {MOCK[0].term}
          </p>
        </div>
      </div>
      {MOCK.slice(1).map((item) => (
        <div key={item.id} className="relative">
          <img src={item.image} alt="" />
          <div className="absolute bottom-0 px-5 py-30px text-white">
            <h4 className="text-xl font-semibold tracking-0.64px font-serif4 mb-4">
              {item.name}
            </h4>
            <p className="text-clamp16px leading-21px tracking-0.48px">
              {item.position}
            </p>
            <p className="text-clamp16px leading-21px tracking-0.48px">
              {item.term}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
