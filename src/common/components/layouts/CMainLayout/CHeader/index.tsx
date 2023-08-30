"use client";

import { usePathname } from "next-intl/client";
import Link from "next-intl/link";

import { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import classNames from "classnames";

import { CSwitchLanguageButton } from "@/common/components/controls";
import { useMouseDirection } from "@/utils/hooks";

import { CListMenu } from "./CListMenu";
import { INavItem } from "./types";

import "./styles.scss";

//#region MOCK
const MOCK = [
  { id: "1", name: "Tân sinh viên", link: "/" },
  { id: "2", name: "Alumni HCMUE", link: "/" },
  { id: "3", name: "ETEP", link: "/" },
  { id: "4", name: "Phân hiệu Long An", link: "/" },
  { id: "5", name: "Phân hiệu Gia Lai", link: "/" },
];

const MOCK1: INavItem[] = [
  { id: "1", name: "Trang chủ", link: "/" },
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
//#endregion

export const CHeader = () => {
  //#region Data

  const pathname = usePathname();

  const { direction } = useMouseDirection();
  //#endregion

  //#region Event
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    } else {
      return pathname.includes(path);
    }
  };

  const onMouseOver = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.currentTarget.classList.remove("left-out", "right-out");

    e.currentTarget.classList.add(
      direction === "right" ? "left-in" : "right-in"
    );
  };
  const onMouseOut = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.currentTarget.classList.remove("left-in", "right-in");

    e.currentTarget.classList.add(
      direction === "right" ? "right-out" : "left-out"
    );
  };
  //#endregion

  //#region Render
  return (
    <header className="fixed z-20 top-0 w-full h-header hidden xl:block">
      <div className="container relative">
        <div className="flex px-[10rem] py-[7px] bg-[#124874] items-center justify-between">
          <ul className="flex items-center gap-10 text-white">
            {MOCK.map((e) => (
              <li key={e.id}>
                <Link href={e.link}>{e.name}</Link>
              </li>
            ))}
          </ul>
          <CSwitchLanguageButton />
        </div>

        <div
          className="flex px-[2rem] py-2 items-center gap-5"
          style={{
            background: "white",
            boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.2)",
          }}
          // style={{
          //   background:
          //     "linear-gradient(90deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.2) 53.37%, rgba(255, 255, 255, 0.06) 100%)",
          //   boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.2)",
          //   backdropFilter: "blur(10px)",
          // }}
        >
          <img src="/images/logo.png" alt="" />
          <Popover.Group
            as="ul"
            className="flex items-center gap-6 text-primary font-serif4"
          >
            {MOCK1.map((e) => (
              <li key={e.id} className="min-h-[42px]">
                {!e?.children ? (
                  <Link
                    href={e.link || "/"}
                    className={classNames(
                      isActive(e.link || "") && "activated font-bold",
                      "navigation-parent-item h-full outline-none inline-block py-[6px]"
                    )}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                  >
                    {e.name}
                  </Link>
                ) : (
                  <Popover as={Fragment}>
                    <Popover.Button
                      className="navigation-parent-item h-full outline-none inline-block py-[6px]"
                      onMouseOver={onMouseOver}
                      onMouseOut={onMouseOut}
                    >
                      {e.name}
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-300"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-4"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full">
                        <CListMenu data={e} />
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                )}
              </li>
            ))}
          </Popover.Group>
        </div>
      </div>
    </header>
  );
  //#endregion
};
