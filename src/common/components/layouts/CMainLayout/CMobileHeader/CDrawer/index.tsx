"use client";

import Link from "next/link";

import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

import { CCloseIcon } from "@/common/components/icons";

import { INavItem } from "../../CHeader/types";

import { CMenuItem } from "./CMenuItem";
import { ICDrawerProps, ICDrawerRef } from "./types";

const MOCK1: INavItem[] = [
  { id: "1", name: "Trang chủ", link: "" },
  {
    id: "2",
    name: "Giới thiệu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat",
    children: [
      { id: "1", name: "Lịch sử hình thành", link: "" },
      { id: "2", name: "Triết lý giáo dục", link: "" },
      { id: "3", name: "Tầm nhìn và sứ mạng", link: "" },
      { id: "4", name: "Sơ đồ tổ chức", link: "" },
      { id: "5", name: "Hội đồng trường", link: "" },
      { id: "6", name: "Ban giám hiệu", link: "" },
      { id: "7", name: "Hội đồng khoa học & đào tạo", link: "" },
      { id: "8", name: "Khoa & bộ môn", link: "" },
      { id: "9", name: "Phòng ban chức năng", link: "" },
      {
        id: "10",
        name: "Trung tâm & viện",
        children: [
          { id: "1", name: "Lê Khánh Phương just a dummy text", link: "" },
          { id: "2", name: "Lê Khánh Phương just a dummy text", link: "" },
          { id: "3", name: "Lê Khánh Phương just a dummy text", link: "" },
        ],
      },
      {
        id: "11",
        name: "Đảng & đoàn thể",
        children: [
          { id: "1", name: "Trần Nguyên Khánh just a dummy text", link: "" },
          { id: "2", name: "Trần Nguyên Khánh just a dummy text", link: "" },
          { id: "3", name: "Trần Nguyên Khánh just a dummy text", link: "" },
        ],
      },
      {
        id: "12",
        name: "Ba công khai",
        children: [
          { id: "1", name: "Nguyễn Văn Công is just a dummy text", link: "" },
          { id: "2", name: "Nguyễn Văn Công is just a dummy text", link: "" },
          { id: "3", name: "Nguyễn Văn Công is just a dummy text", link: "" },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Tin tức - Sự kiện",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat",
    children: [
      { id: "1", name: "Lịch sử hình thành", link: "" },
      { id: "2", name: "Triết lý giáo dục", link: "" },
      { id: "3", name: "Tầm nhìn và sứ mạng", link: "" },
      {
        id: "4",
        name: "Trung tâm & viện",
        children: [
          { id: "1", name: "Đặng Hoàng Phúc just a dummy text", link: "" },
          { id: "2", name: "Đặng Hoàng Phúc just a dummy text", link: "" },
          { id: "3", name: "Đặng Hoàng Phúc just a dummy text", link: "" },
        ],
      },
      {
        id: "5",
        name: "Đảng & đoàn thể",
        children: [
          {
            id: "1",
            name: "Nguyễn Phước Ngọc Ánh just a dummy text",
            link: "",
          },
          {
            id: "2",
            name: "Nguyễn Phước Ngọc Ánh just a dummy text",
            link: "",
          },
          {
            id: "3",
            name: "Nguyễn Phước Ngọc Ánh just a dummy text",
            link: "",
          },
        ],
      },
      {
        id: "6",
        name: "Ba công khai",
        children: [
          { id: "1", name: "Chị Dịu béo is just a dummy text", link: "" },
          { id: "2", name: "Chị Dịu béo is just a dummy text", link: "" },
          { id: "3", name: "Chị Dịu béo is just a dummy text", link: "" },
        ],
      },
    ],
  },
  { id: "4", name: "Tuyển sinh", link: "/employ" },
  { id: "5", name: "Đào tạo", link: "/training" },
  { id: "6", name: "Nghiên cứu", link: "/research" },
  { id: "7", name: "Bảo đảm chất lượng giáo dục", link: "/ensure" },
  { id: "8", name: "Hợp tác và phục vụ cộng đồng", link: "/coop" },
];

export const CDrawer = forwardRef<ICDrawerRef, ICDrawerProps>(
  ({ ...props }, ref) => {
    //#region Data
    const [isOpen, setIsOpen] = useState<boolean>(false);
    //#endregion

    //#region Event
    const onClose = () => setIsOpen(false);
    //#endregion

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
    }));

    useEffect(() => {
      if (isOpen) document.documentElement.style.overflow = "hidden";
      else document.documentElement.style.overflow = "auto";
    }, [isOpen]);

    //#region Render
    return (
      <div
        className={
          "fixed overflow-hidden z-[11] bg-opacity-25 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0"
            : " transition-all opacity-0 translate-x-full")
        }
      >
        <div
          className={
            " w-full max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " translate-x-0" : "translate-x-full")
          }
        >
          <div className="relative w-full max-w-lg p-4 h-full flex flex-col">
            <div className="shrink-0">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-lg">Menu</h4>
                <button onClick={onClose}>
                  <CCloseIcon />
                </button>
              </div>
              <div className="divider h-[3px] shrink-0 rounded-10px my-2 text-center w-full bg-[linear-gradient(90deg,_#cccccc,_white)]"></div>
            </div>
            <div className="flex-1 overflow-y-scroll">
              <ul>
                {MOCK1.map((e) => (
                  <li key={e.id} className="mb-3 last:mb-0 font-medium">
                    <CMenuItem data={e} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          className=" w-screen h-full cursor-pointer "
          onClick={onClose}
        ></div>
      </div>
    );
    //#endregion
  }
);

CDrawer.displayName = "CDrawer";
