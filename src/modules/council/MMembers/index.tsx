import { MPersonInfo } from "./MPersonInfo";
import { IMemberData } from "./types";

const MOCK: IMemberData[] = [
  {
    id: "1",
    image: "/images/nvloc.png",
    name: "TS. Nguyễn Viết Lộc",
    position: "Vụ trưởng Vụ tổ chức cán bộ",
  },
  {
    id: "2",
    image: "/images/nvloc.png",
    name: "TS. Nguyễn Viết Lộc",
    position: "Vụ trưởng Vụ tổ chức cán bộ",
  },
  {
    id: "3",
    image: "/images/nvloc.png",
    name: "TS. Nguyễn Viết Lộc",
    position: "Vụ trưởng Vụ tổ chức cán bộ",
  },
  {
    id: "4",
    image: "/images/nvloc.png",
    name: "TS. Nguyễn Viết Lộc",
    position: "Vụ trưởng Vụ tổ chức cán bộ",
  },
  {
    id: "5",
    image: "/images/nvloc.png",
    name: "TS. Nguyễn Viết Lộc",
    position: "Vụ trưởng Vụ tổ chức cán bộ",
  },
  {
    id: "6",
    image: "/images/nvloc.png",
    name: "TS. Nguyễn Viết Lộc",
    position: "Vụ trưởng Vụ tổ chức cán bộ",
  },
  {
    id: "7",
    image: "/images/nvloc.png",
    name: "TS. Nguyễn Viết Lộc",
    position: "Vụ trưởng Vụ tổ chức cán bộ",
  },
  {
    id: "8",
    image: "/images/nvloc.png",
    name: "TS. Nguyễn Viết Lộc",
    position: "Vụ trưởng Vụ tổ chức cán bộ",
  },
  {
    id: "9",
    image: "/images/nvloc.png",
    name: "TS. Nguyễn Viết Lộc",
    position: "Vụ trưởng Vụ tổ chức cán bộ",
  },
  {
    id: "10",
    image: "/images/nvloc.png",
    name: "TS. Nguyễn Viết Lộc",
    position: "Vụ trưởng Vụ tổ chức cán bộ",
  },
  {
    id: "11",
    image: "/images/nvloc.png",
    name: "TS. Nguyễn Viết Lộc",
    position: "Vụ trưởng Vụ tổ chức cán bộ",
  },
  {
    id: "12",
    image: "/images/nvloc.png",
    name: "TS. Nguyễn Viết Lộc",
    position: "Vụ trưởng Vụ tổ chức cán bộ",
  },
];

export const MMembers = () => {
  return (
    <div className="mt-[100px]">
      <div className="flex flex-col gap-[10px]">
        <div className="text-primary text-40px font-bold font-serif4">
          Danh sách thành viên hội đồng trường nhiệm kỳ 2020 - 2025
        </div>
        <span className="text-16px text-black font-normal">
          Kèm theo Quyết định số 2695/QĐ-BGDĐT ngày 21/09/2020 của Bộ trưởng Bộ
          Giáo dục và Đào tạo
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 md:gap-x-10 gap-y-7 md:gap-y-15 mt-10">
        {MOCK.map((e) => (
          <MPersonInfo key={e.id} data={e} />
        ))}
      </div>
    </div>
  );
};
