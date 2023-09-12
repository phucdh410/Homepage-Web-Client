"use client";

import { useDayjs } from "@/utils/hooks";

const MOCK = {
  id: "1",
  title:
    "Chiêu sinh khóa BD NVSP dành cho người có bằng cử nhân chuyên ngành phù hợp có nguyện vọng trở thành giáo viên tiểu học",
  image: {
    url: "/images/post.png",
    note: "Ghi chú cho hình ảnh !!!",
  },
  content: "",
  created_date: "2023-05-24 08:00:00",
  author: "Nguyễn Hoàng Phương",
  position: "Trưởng khoa CNTT",
};

export const MParseContent = () => {
  const dayjs = useDayjs();

  return (
    <div>
      <img src={MOCK.image.url} alt="" className="w-full h-auto object-cover" />
      <p className="mx-8 my-6 mb-20">{MOCK.image.note}</p>
      <div className="container">
        <h2 className="m-auto text-center max-w-[900px] font-bold text-primary font-serif4 text-clamp40px">
          {MOCK.title}
        </h2>
        <div className="line-divider m-auto h-[2px] max-w-[303px] mt-20 mb-16 bg-[linear-gradient(90deg,_rgba(207,_55,_61,_0.00)_0%,_#CF373D_52.86%,_rgba(207,_55,_61,_0.00)_100%)]"></div>
        <div className="html-content mb-16">content</div>
        <div className="border-y border-[#D9D9D9] py-30px m-auto mb-32 max-w-[900px] flex items-center">
          <div className="flex flex-1 gap-9">
            <span>Ngày</span>
            <div>
              <p>{dayjs(MOCK.created_date).format("h:mm A")}</p>
              <p>{dayjs(MOCK.created_date).format("D/M/YYYY")}</p>
            </div>
          </div>
          <div className="flex shrink-0 gap-9">
            <span>Đăng</span>
            <div>
              <p className="text-primary font-bold text-lg">{MOCK.author}</p>
              <p>{MOCK.position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
