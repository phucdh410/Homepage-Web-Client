const MOCK = [
  {
    id: "1",
    name: "PGS. TS. Nguyễn Kim Hồng",
    position1: "Chủ tịch Hội đồng",
    position2: "Khoa Địa lý",
  },
  {
    id: "2",
    name: "TS. Nguyễn Thị Minh Hồng",
    position1: "Phó Chủ tịch Hội đồng",
    position2: "Hiệu trưởng",
  },
  {
    id: "3",
    name: "PGS.TS. Nguyễn Tiến Công",
    position1: "Ủy viên Thư ký",
    position2: "Trưởng phòng KHCN&MT-TCKH",
  },
  {
    id: "4",
    name: "PGS.TS. Huỳnh Văn Sơn",
    position1: "Ủy viên",
    position2: "Phó Hiệu trưởng",
  },
  {
    id: "5",
    name: "TS. Bùi Trần Quỳnh Ngọc",
    position1: "Ủy viên",
    position2: "Trưởng phòng Sau Đại học",
  },
  {
    id: "6",
    name: "PGS.TS. Dương Thị Hồng Hiếu",
    position1: "Ủy viên",
    position2: "Trưởng phòng Đào tạo",
  },
  {
    id: "7",
    name: "PGS. TS. Nguyễn Kim Hồng",
    position1: "Chủ tịch Hội đồng",
    position2: "Khoa Địa lý",
  },
  {
    id: "8",
    name: "TS. Nguyễn Thị Minh Hồng",
    position1: "Phó Chủ tịch Hội đồng",
    position2: "Hiệu trưởng",
  },
  {
    id: "9",
    name: "PGS.TS. Nguyễn Tiến Công",
    position1: "Ủy viên Thư ký",
    position2: "Trưởng phòng KHCN&MT-TCKH",
  },
  {
    id: "10",
    name: "PGS.TS. Huỳnh Văn Sơn",
    position1: "Ủy viên",
    position2: "Phó Hiệu trưởng",
  },
  {
    id: "11",
    name: "TS. Bùi Trần Quỳnh Ngọc",
    position1: "Ủy viên",
    position2: "Trưởng phòng Sau Đại học",
  },
  {
    id: "12",
    name: "PGS.TS. Dương Thị Hồng Hiếu",
    position1: "Ủy viên",
    position2: "Trưởng phòng Đào tạo",
  },
  {
    id: "13",
    name: "PGS. TS. Nguyễn Kim Hồng",
    position1: "Chủ tịch Hội đồng",
    position2: "Khoa Địa lý",
  },
  {
    id: "14",
    name: "TS. Nguyễn Thị Minh Hồng",
    position1: "Phó Chủ tịch Hội đồng",
    position2: "Hiệu trưởng",
  },
  {
    id: "15",
    name: "PGS.TS. Nguyễn Tiến Công",
    position1: "Ủy viên Thư ký",
    position2: "Trưởng phòng KHCN&MT-TCKH",
  },
  {
    id: "16",
    name: "PGS.TS. Huỳnh Văn Sơn",
    position1: "Ủy viên",
    position2: "Phó Hiệu trưởng",
  },
  {
    id: "17",
    name: "TS. Bùi Trần Quỳnh Ngọc",
    position1: "Ủy viên",
    position2: "Trưởng phòng Sau Đại học",
  },
  {
    id: "18",
    name: "PGS.TS. Dương Thị Hồng Hiếu",
    position1: "Ủy viên",
    position2: "Trưởng phòng Đào tạo",
  },
  {
    id: "19",
    name: "PGS. TS. Nguyễn Kim Hồng",
    position1: "Chủ tịch Hội đồng",
    position2: "Khoa Địa lý",
  },
  {
    id: "20",
    name: "TS. Nguyễn Thị Minh Hồng",
    position1: "Phó Chủ tịch Hội đồng",
    position2: "Hiệu trưởng",
  },
  {
    id: "21",
    name: "PGS.TS. Nguyễn Tiến Công",
    position1: "Ủy viên Thư ký",
    position2: "Trưởng phòng KHCN&MT-TCKH",
  },
  {
    id: "22",
    name: "PGS.TS. Huỳnh Văn Sơn",
    position1: "Ủy viên",
    position2: "Phó Hiệu trưởng",
  },
  {
    id: "23",
    name: "TS. Bùi Trần Quỳnh Ngọc",
    position1: "Ủy viên",
    position2: "Trưởng phòng Sau Đại học",
  },
  {
    id: "24",
    name: "PGS.TS. Dương Thị Hồng Hiếu",
    position1: "Ủy viên",
    position2: "Trưởng phòng Đào tạo",
  },
  {
    id: "25",
    name: "PGS.TS. Huỳnh Văn Sơn",
    position1: "Ủy viên",
    position2: "Trưởng phòng Đào tạo",
  },
];

export const MList = () => {
  return (
    <section className="container mt-16">
      <div className="mx-30px mb-20 select-none">
        <h3 className="text-primary font-bold text-clamp40px font-serif4 tracking-1.2px mb-4 lg:mb-6 2xl:mb-8">
          Thành viên hội đồng
        </h3>
        <div className="min-h-[4px] w-full bg-[#D9D9D9] mb-10 lg:mb-12 2xl:mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 2xl:gap-x-24 gap-y-12">
          {MOCK.map((item) => (
            <div key={item.id} className="flex flex-col gap-[10px]">
              <h5 className="text-primary text-clamp25px font-serif4 font-semibold tracking-0.75px">
                {item.name}
              </h5>
              <p className="leading-21px tracking-0.48px">{item.position1}</p>
              <p className="leading-21px tracking-0.48px">{item.position2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
