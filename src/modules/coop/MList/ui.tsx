"use client";

import { useTranslations } from "next-intl";

import { useState } from "react";

import { CButton } from "@/common/components/controls";

import { MCoopItem } from "./MCoopItem";
import { IMListProps } from "./types";

export const MUi = ({ data }: IMListProps) => {
  //#region Data
  const d = useTranslations("global");

  const [currentTab, setCurrentTab] = useState<1 | 2 | 3>(1);
  //#endregion

  //#region Event
  const onTabChange = (newTab: 1 | 2 | 3) => {
    setCurrentTab(newTab);
  };
  //#endregion

  //#region Render
  return (
    <section className="mt-16">
      <div className="container">
        <div className="max-w-2xl m-auto mb-10 px-5">
          <h2 className="text-center mb-10px uppercase text-primary text-clamp-home-section-title leading-[48px] font-extrabold font-serif4 ">
            hợp tác và phục vụ cộng đồng
          </h2>
          <p className="text-center text-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="mx-2 lg:mx-5 2xl:mx-10">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <button
              onClick={() => onTabChange(1)}
              className={`${
                currentTab === 1
                  ? "bg-primary text-white"
                  : "bg-[#f5f5f5] text-primary"
              } min-w-[189px] rounded-10px px-5 py-2 font-bold font-serif4`}
            >
              Tất cả
            </button>
            <button
              onClick={() => onTabChange(2)}
              className={`${
                currentTab === 2
                  ? "bg-primary text-white"
                  : "bg-[#f5f5f5] text-primary"
              } min-w-[189px] rounded-10px px-5 py-2 font-bold font-serif4`}
            >
              Hợp tác trong nước
            </button>
            <button
              onClick={() => onTabChange(3)}
              className={`${
                currentTab === 3
                  ? "bg-primary text-white"
                  : "bg-[#f5f5f5] text-primary"
              } min-w-[189px] rounded-10px px-5 py-2 font-bold font-serif4`}
            >
              Hợp tác quốc tế
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 mb-20">
            {data &&
              data.length > 0 &&
              data.map((item) => <MCoopItem key={item.id} data={item} />)}
          </div>

          <div className="text-center mb-20">
            <CButton className="rounded-10px bg-primary text-white py-4 px-5 min-w-[189px] font-bold font-serif4">
              {d("download-more")}
            </CButton>
          </div>
        </div>
      </div>
    </section>
  );
  //#endregion
};
