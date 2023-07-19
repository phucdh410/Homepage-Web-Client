const MOCK = [
  {
    id: "1",
    title: "Phương pháp giảng dạy tin học",
    lead: "Trưởng bộ môn: TS. Lê Đức Long",
    children: [
      { id: "1", name: "TS. Nguyễn Ngọc Thúy" },
      { id: "2", name: "TS. Lê Minh Trung" },
      { id: "3", name: "TS. Nguyễn Đặng Kim Khánh" },
      { id: "4", name: "ThS. Nguyễn Trần Phi Phượng" },
      { id: "5", name: "ThS. Nguyễn Thị Ngọc Thoa" },
      { id: "6", name: "ThS. Nguyễn Khác Văn" },
      { id: "7", name: "ThS. Hồ Diệu Khuôn" },
    ],
  },
  {
    id: "2",
    title: "Khoa học máy tính",
    lead: "Trưởng bộ môn: TS. Nguyễn Viết Hưng",
    children: [
      { id: "1", name: "TS. Ngô Quốc Việt" },
      { id: "2", name: "ThS. Trần Hữu Quốc Thư" },
      { id: "3", name: "ThS. Nguyễn Đỗ Thái Nguyên" },
      { id: "4", name: "ThS. Trần Đức Tâm" },
      { id: "5", name: "ThS. Lương Trần Ngọc Khiết" },
      { id: "6", name: "ThS. Võ Hoàng Quân" },
    ],
  },
  {
    id: "3",
    title: "Hệ thống thông tin và mạng truyền thông",
    lead: "Trưởng bộ môn: TS. Trần Sơn Hải",
    children: [
      { id: "1", name: "TS. GVC. Trần Ngọc Bảo" },
      { id: "2", name: "TS. Văn Thế Thành" },
      { id: "3", name: "ThS. Trịnh Huy Hoàng" },
      { id: "4", name: "ThS.NCS Vy Vân" },
      { id: "5", name: "ThS. Lương Trần Hy Hiến" },
      { id: "6", name: "ThS. Lê Minh Triết" },
      { id: "7", name: "ThS. Trần Thanh Nhã" },
      { id: "8", name: "ThS. Ma Ngân Giang" },
    ],
  },
];

export const MSubjects = () => {
  return (
    <section className="mt-16">
      <h3 className="text-primary text-center uppercase font-serif4 text-clamp-section-title font-bold mb-5">
        bộ môn
      </h3>
      <p className="m-auto max-w-[610px] text-center text-sub mb-12">
        Lorem ipsum dolor sit amet, consectetur adispiscing elit. Nulla viverra,
        risus non lobortis feugigat, eros nisi gravida libero, a laoreet velit
        enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor
      </p>
      <div className="px-8 flex flex-col lg:flex-row gap-30px">
        {MOCK.map((e) => (
          <div key={e.id} className="flex-1 rounded-20px bg-[#f9f9f9] p-[30px]">
            <h6 className="text-primary text-2xl font-semibold font-raleway leading-[35px] tracking-[0.72px] mb-[15px]">
              {e.title}
            </h6>
            <p className="text-sub2 font-semibold font-raleway">{e.lead}</p>
            <ul>
              {e.children.map((el) => (
                <li key={el.id} className="font-raleway mt-[15px]">
                  {el.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
