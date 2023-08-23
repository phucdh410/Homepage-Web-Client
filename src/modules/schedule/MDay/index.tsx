"use client";

import { useState } from "react";

import { useDayjs } from "@/utils/hooks";

import { IDateNote } from "../MCalendar/types";

const MOCK: IDateNote = [
  { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
  { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
];
export const MDay = () => {
  //#region Data
  const dayjs = useDayjs();

  const [dayObj, setDayObj] = useState(dayjs());

  //#endregion

  //#region Event
  const handlePrev = () => setDayObj(dayObj.subtract(1, "day"));

  const handleNext = () => setDayObj(dayObj.add(1, "day"));
  //#endregion

  //#region Render
  return (
    <div className="mx-3 md:mx-5 2xl:mx-10">
      <div className="bg-primary text-white rounded-10px px-5 py-2 flex justify-between items-center mb-3">
        <h5 className="uppercase font-bold font-serif4 text-xs 2xl:text-2xl">
          {dayObj.format("dddd, DD MMMM YYYY")}
        </h5>
        <div className="flex gap-2 items-center">
          <button
            className="p-2 rounded-full bg-primary transition-[400ms] hover:bg-[#80d1ff52] hover:scale-110"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.0016 0.71811C9.37534 0.32692 10 0.32692 10.3737 0.71811C10.7241 1.08485 10.7241 1.6623 10.3737 2.02904L5.62456 7L10.3737 11.971C10.7241 12.3377 10.7241 12.9152 10.3737 13.2819C10 13.6731 9.37534 13.6731 9.0016 13.2819L2.99997 7L9.0016 0.71811Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            className="p-2 rounded-full bg-primary transition-[400ms] hover:bg-[#80d1ff52] hover:scale-110"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.9984 0.71811C4.62466 0.32692 3.99999 0.32692 3.62625 0.71811C3.27587 1.08485 3.27587 1.6623 3.62625 2.02904L8.37544 7L3.62625 11.971C3.27587 12.3377 3.27587 12.9152 3.62625 13.2819C3.99999 13.6731 4.62466 13.6731 4.9984 13.2819L11 7L4.9984 0.71811Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="mx-1 md:mx-2 2xl:mx-5">
        {MOCK.length > 0 &&
          MOCK.map((e, i) => (
            <div
              key={e.name + i}
              className="flex items-center justify-between border-b border-[#D5D4DF] py-3"
            >
              <div>{e.name}</div>
              <div>{e.time}</div>
            </div>
          ))}
      </div>
    </div>
  );
  //#endregion
};
