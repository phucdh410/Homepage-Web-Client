"use client";

import { Fragment } from "react";

import { Tab } from "@headlessui/react";
import dayjs from "dayjs";
import vi from "dayjs/locale/vi";
import weekday from "dayjs/plugin/weekday";

import { MCalendar } from "../MCalendar";
import { MWeek } from "../MWeek";

dayjs.extend(weekday);
dayjs.locale(vi);

export const MTabs = () => {
  //#region Data
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <div className="mt-16 container">
      <h3 className="uppercase text-primary text-center font-bold text-clamp-section-title font-serif4 mb-5">
        lịch công tác
      </h3>
      <Tab.Group>
        <Tab.List className="flex items-center justify-center gap-2">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`${
                  selected
                    ? "bg-primary text-white"
                    : "bg-[#f5f5f5] text-primary"
                } min-w-[50px] 2xl:min-w-[189px] text-sm sm:text-base rounded-10px px-5 py-2 font-bold font-serif4`}
              >
                Theo tháng
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`${
                  selected
                    ? "bg-primary text-white"
                    : "bg-[#f5f5f5] text-primary"
                } min-w-[50px] 2xl:min-w-[189px] text-sm sm:text-base rounded-10px px-5 py-2 font-bold font-serif4`}
              >
                Theo tuần
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`${
                  selected
                    ? "bg-primary text-white"
                    : "bg-[#f5f5f5] text-primary"
                } min-w-[50px] 2xl:min-w-[189px] text-sm sm:text-base rounded-10px px-5 py-2 font-bold font-serif4`}
              >
                Theo ngày
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-10">
          <Tab.Panel>
            <MCalendar />
          </Tab.Panel>
          <Tab.Panel>
            <MWeek />
          </Tab.Panel>
          <Tab.Panel>asdasda</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
  //#endregion
};
