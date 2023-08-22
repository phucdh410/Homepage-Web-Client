"use client";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";

import { useEffect, useState } from "react";

import { CButton } from "@/common/components/controls";
import { delay } from "@/utils/funcs";

import { MLoadingCoopItem } from "./loading";
import { MCalendar } from "./MCalendar";
import { MCoopItem } from "./MCoopItem";
import { IMListProps } from "./types";

export const MUi = ({ data }: IMListProps) => {
  //#region Data
  const d = useTranslations("global");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const tab = searchParams.get("tab");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [currentTab, setCurrentTab] = useState<1 | 2 | 3>(
    tab ? (Number(tab) as 1 | 2 | 3) : 1
  );
  //#endregion

  //#region Event
  const onTabChange = (newTab: 1 | 2 | 3) => {
    setCurrentTab(newTab);

    router.replace(`${pathname}?tab=${newTab}`);
  };

  const onLoadMore = async () => {
    setIsLoading(true);
    delay(() => {
      setIsLoading(false);
    }, 3000);
  };
  //#endregion

  useEffect(() => {
    if (!pathname.includes("?tab=")) {
      router.replace(`${pathname}?tab=${currentTab}`);
    }
  }, [pathname, currentTab, router]);

  //#region Render
  return (
    <section className="mt-16">
      <div className="container">
        {/* <div className="max-w-2xl m-auto mb-10 px-5">
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
            {isLoading &&
              Array(3)
                .fill("")
                .map((e, i) => (
                  <MLoadingCoopItem key={i.toString() + new Date().toString} />
                ))}
          </div>

          <div className="text-center mb-20">
            <CButton
              disabled={isLoading}
              className="rounded-10px bg-primary text-white py-4 px-5 min-w-[189px] font-bold font-serif4"
              onClick={onLoadMore}
            >
              {`${d("download-more")}${isLoading ? " ..." : ""}`}
            </CButton>
          </div>
        </div> */}

        <MCalendar />
      </div>
    </section>
  );
  //#endregion
};
