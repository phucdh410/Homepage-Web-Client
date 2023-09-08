"use client";

import { usePathname } from "next-intl/client";
import Link from "next-intl/link";

import { useMemo } from "react";

import classNames from "classnames";
import SimpleBar from "simplebar-react";

import { INTRODUCTION_LIST } from "@/common/constants";

import "simplebar-react/dist/simplebar.min.css";

export const MSubmenu = () => {
  //#region Data
  const pathname = usePathname();

  const modifiedList = useMemo(() => {
    return INTRODUCTION_LIST.map((e) => {
      if (pathname === e.link) {
        return { ...e, selected: true };
      } else return { ...e, selected: false };
    });
  }, [pathname]);
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <div className="container">
      <div className="px-4 md:px-5 lg:px-6 2xl:px-30px flex items-center gap-2 lg:gap-3">
        <span className="uppercase whitespace-nowrap shrink-0 text-primary font-bold tracking-0.64px">
          giới thiệu
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="shrink-0"
        >
          <path
            d="M11.4137 15.2917L14.0037 12.7017C14.3937 12.3117 14.3937 11.6817 14.0037 11.2917L11.4137 8.70168C10.7837 8.08168 9.70374 8.52168 9.70374 9.41168V14.5817C9.70374 15.4817 10.7837 15.9217 11.4137 15.2917Z"
            fill="#191919"
          />
        </svg>
        <div className="flex-1 overflow-hidden">
          <SimpleBar>
            <div className="flex items-center gap-1 lg:gap-2 my-3">
              {modifiedList.map((navItem) => (
                <Link
                  key={navItem.id}
                  href={navItem.link}
                  className={classNames(
                    navItem.selected &&
                      "text-primary !font-bold tracking-0.64px",
                    "whitespace-nowrap transition-all hover:font-semibold p-2"
                  )}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          </SimpleBar>
        </div>
      </div>
    </div>
  );
  //#endregion
};
