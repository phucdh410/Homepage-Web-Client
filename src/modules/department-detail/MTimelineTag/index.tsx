"use client";

import { useCallback } from "react";

import { useMediaQuery } from "@/utils/hooks";

import { TypeDesktop } from "./TypeDesktop";
import { TypeMobile } from "./TypeMobile";
import { ITimelineDataProps } from "./types";
import { TypeTablet } from "./TypeTablet";

const MOCK = [
  {
    id: "1",
    avatar: "/images/avatar.png",
    time: "09/2020 - 10/2023",
    lead: "TS. Nguyễn Viết Hưng",
    subs: ["TS. Nguyễn Viết Hưng", "ThS. Trịnh Huy Hoàng"],
  },
  {
    id: "2",
    avatar: "/images/avatar.png",
    time: "09/2020 - 10/2023",
    lead: "TS. Nguyễn Viết Hưng",
    subs: ["TS. Nguyễn Viết Hưng", "ThS. Trịnh Huy Hoàng"],
  },
  {
    id: "3",
    avatar: "/images/avatar.png",
    time: "09/2020 - 10/2023",
    lead: "TS. Nguyễn Viết Hưng",
    subs: ["TS. Nguyễn Viết Hưng", "ThS. Trịnh Huy Hoàng"],
  },
  {
    id: "4",
    avatar: "/images/avatar.png",
    time: "09/2020 - 10/2023",
    lead: "TS. Nguyễn Viết Hưng",
    subs: ["TS. Nguyễn Viết Hưng", "ThS. Trịnh Huy Hoàng"],
  },
  {
    id: "5",
    avatar: "/images/avatar.png",
    time: "09/2020 - 10/2023",
    lead: "TS. Nguyễn Viết Hưng",
    subs: ["TS. Nguyễn Viết Hưng", "ThS. Trịnh Huy Hoàng"],
  },
  {
    id: "6",
    avatar: "/images/avatar.png",
    time: "09/2020 - 10/2023",
    lead: "TS. Nguyễn Viết Hưng",
    subs: ["TS. Nguyễn Viết Hưng", "ThS. Trịnh Huy Hoàng"],
  },
];

export const MTimelineTag = () => {
  //#region Data
  const { currentWidth } = useMediaQuery();
  //#endregion

  const renderTimeline = useCallback(
    ({ data }: ITimelineDataProps) => {
      if (currentWidth < 1024) {
        if (currentWidth < 768) return <TypeMobile data={data} />;
        else return <TypeTablet data={data} />;
      } else {
        return <TypeDesktop data={data} />;
      }
    },
    [currentWidth]
  );

  //#region Render
  return (
    <section className="mt-16">
      <h3 className="text-center uppercase text-primary font-serif4 text-clamp-section-title font-bold mb-5">
        lãnh đạo qua các thời kì
      </h3>
      <p className="m-auto mb-12 text-center max-w-[610px] text-sub">
        Lorem ipsum dolor sit amet, consectetur adispiscing elit. Nulla viverra,
        risus non lobortis feugigat, eros nisi gravida libero, a laoreet velit
        enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor
      </p>

      {renderTimeline({ data: MOCK })}
    </section>
  );
  //#endregion
};
