"use client";

import { Fragment } from "react";

import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { motion } from "framer-motion";

import { MCalendar } from "../MCalendar";
import { MDay } from "../MDay";
import { MWeek } from "../MWeek";

const TABS = ["tháng", "tuần", "ngày"];

export const MTabs = () => {
  //#region Data
  //#endregion

  //#region Event

  //#endregion

  //#region Render
  return (
    <div className="mt-16 container mb-20">
      <h3 className="uppercase text-primary text-center font-bold text-clamp-section-title font-serif4 mb-5">
        lịch công tác
      </h3>
      <Tab.Group>
        <Tab.List className="flex items-center justify-center gap-2">
          {TABS.map((tab, i) => (
            <Tab key={i} as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    "bg-[#f5f5f5] relative hover:bg-[#51a2f821] outline-none min-w-[50px] 2xl:min-w-[189px] text-sm sm:text-base rounded-10px px-5 py-2 font-bold"
                  }
                >
                  <span
                    className={classNames(
                      selected ? " text-white" : " text-primary",
                      "z-10 relative transition-colors duration-500"
                    )}
                  >
                    Theo {tab}
                  </span>
                  {selected && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute rounded-inherit inset-0 z-1 !bg-primary"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-10">
          <Tab.Panel>
            <MCalendar />
          </Tab.Panel>
          <Tab.Panel>
            <MWeek />
          </Tab.Panel>
          <Tab.Panel>
            <MDay />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
  //#endregion
};
