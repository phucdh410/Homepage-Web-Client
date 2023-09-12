"use client";

import { usePathname } from "next-intl/client";
import Link from "next-intl/link";

import { Fragment, useCallback, useEffect, useState } from "react";

import { Popover, Transition } from "@headlessui/react";
import classNames from "classnames";

import { CSwitchLanguageButton } from "@/common/components/controls";
import { INTRODUCTION_LIST, MAIN_BG_ID } from "@/common/constants";
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
    children: INTRODUCTION_LIST,
  },
  {
    id: "3",
    name: "Tin tức - Sự kiện",
    hrefId: "news-and-events",
  },
  { id: "4", name: "Tuyển sinh", hrefId: "admissions" },
  { id: "5", name: "Đào tạo", hrefId: "training" },
  { id: "6", name: "Nghiên cứu", hrefId: "research" },
  {
    id: "7",
    name: "Bảo đảm chất lượng giáo dục",
    hrefId: "ensuring-quality-of-education",
  },
  {
    id: "8",
    name: "Hợp tác và phục vụ cộng đồng",
    hrefId: "collaborate-and-serve-the-community",
  },
];
//#endregion

export const CHeader = () => {
  //#region Data
  const [isMainBg, setIsMainBg] = useState<boolean>(false);

  const pathname = usePathname();

  const { direction } = useMouseDirection();
  //#endregion

  //#region Event
  const isActive = useCallback(
    (path: string) => {
      if (path === "/") {
        return pathname === path;
      } else {
        return pathname.includes(path);
      }
    },
    [pathname]
  );

  const onMouseOver = useCallback(
    (
      e:
        | React.MouseEvent<HTMLAnchorElement, MouseEvent>
        | React.MouseEvent<HTMLButtonElement>
    ) => {
      e.currentTarget.classList.remove("left-out", "right-out");

      e.currentTarget.classList.add(
        direction === "right" ? "left-in" : "right-in"
      );
    },
    [direction]
  );
  const onMouseOut = useCallback(
    (
      e:
        | React.MouseEvent<HTMLAnchorElement, MouseEvent>
        | React.MouseEvent<HTMLButtonElement>
    ) => {
      e.currentTarget.classList.remove("left-in", "right-in");

      e.currentTarget.classList.add(
        direction === "right" ? "right-out" : "left-out"
      );
    },
    [direction]
  );

  const renderNavigation = useCallback(() => {
    return MOCK1.map((nav) => {
      if (nav.children && nav.children.length > 0) {
        return (
          <li
            key={nav.id}
            className={classNames(
              isMainBg && "!text-white",
              "text-primary min-h-[42px]"
            )}
          >
            <Popover as={Fragment}>
              <Popover.Button
                className="navigation-parent-item h-full outline-none inline-block py-[6px]"
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
              >
                {nav.name}
              </Popover.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-300"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-4"
              >
                <Popover.Panel className="absolute inset-x-0 top-full">
                  <CListMenu data={nav} />
                </Popover.Panel>
              </Transition>
            </Popover>
          </li>
        );
      } else if (nav.hrefId) {
        return (
          <li
            key={nav.id}
            className={classNames(
              isMainBg && "!text-white",
              "text-primary min-h-[42px]"
            )}
          >
            <a
              href={`#${nav.hrefId}`}
              className={classNames(
                "navigation-parent-item h-full outline-none inline-block py-[6px]"
              )}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
            >
              {nav.name}
            </a>
          </li>
        );
      } else
        return (
          <li
            key={nav.id}
            className={classNames(
              isMainBg && "!text-white",
              "text-primary min-h-[42px]"
            )}
          >
            <Link
              href={nav.link || "/"}
              className={classNames(
                isActive(nav.link || "") && "activated font-bold",
                "navigation-parent-item h-full outline-none inline-block py-[6px]"
              )}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
            >
              {nav.name}
            </Link>
          </li>
        );
    });
  }, [isActive, isMainBg, onMouseOut, onMouseOver]);
  //#endregion

  useEffect(() => {
    if (pathname === "/") setIsMainBg(true);
    else setIsMainBg(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = (e: Event) => {
      const mainBg = document.getElementById(MAIN_BG_ID);

      if (mainBg) {
        const { height } = mainBg.getBoundingClientRect();
        if (window.scrollY + 104 >= height) setIsMainBg(false);
        else setIsMainBg(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          className={classNames(
            isMainBg
              ? "bg-[linear-gradient(90deg,_rgba(255,_255,_255,_0.06)_0%,_rgba(255,_255,_255,_0.2)_53.37%,_rgba(255,_255,_255,_0.06)_100%)] shadow-[5px_5px_30px_rgba(0,_0,_0,_0.2)] backdrop-blur-[10px]"
              : "bg-white shadow-[5px_5px_30px_rgba(0,_0,_0,_0.2)]",
            "flex px-[2rem] py-2 items-center gap-5 transition-[background,color] duration-300"
          )}
        >
          <img src="/images/logo.png" alt="" />
          <Popover.Group
            as="ul"
            className="flex items-center gap-6 text-primary font-serif4"
          >
            {renderNavigation()}
          </Popover.Group>
        </div>
      </div>
    </header>
  );
  //#endregion
};
