"use client";

import { useMemo, useState } from "react";

import dayjs from "dayjs";

import { IDateNote } from "../MCalendar/types";

import { IWeekData } from "./types";

const MOCK: Record<string, IDateNote> = {
  "2023-08-21": [
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
  ],
  "2023-08-23": [
    { time: "", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
    { time: "", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
  ],
  "2023-08-26": [
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
  ],
};

export const MWeek = () => {
  //#region Data
  const [dayObj, setDayObj] = useState(dayjs());

  const data = useMemo(() => {
    const _mock: Record<string, IDateNote> = {};
    const response: IWeekData = [];
    const firstDay = dayjs(dayObj).startOf("week");

    Array(7)
      .fill("")
      .forEach((e, i) => {
        const date = firstDay.add(i, "day").format("YYYY-MM-DD");
        _mock[date] = MOCK[date] ?? [
          {
            time: "",
            name: "",
          },
        ];
      });

    let date = "";

    Object.keys(_mock).forEach((e) => {
      _mock[e].forEach((el) => {
        if (date === e) {
          response.push({ ...el, date: "" });
        } else {
          response.push({ ...el, date: e });
          date = e;
        }
      });
      date = "";
    });
    return response;
  }, [dayObj]);
  //#endregion

  //#region Event
  const handlePrev = () => setDayObj(dayObj.subtract(1, "week"));

  const handleNext = () => setDayObj(dayObj.add(1, "week"));
  //#endregion

  //#region Render
  return (
    <div className="mx-3 md:mx-5 2xl:mx-10">
      <div className="bg-primary text-white rounded-10px px-5 py-2 flex justify-between items-center mb-3">
        <h5 className="uppercase font-bold font-serif4 text-xs 2xl:text-2xl">
          {dayjs(dayObj).startOf("week").format("DD MMMM YYYY") +
            " - " +
            dayjs(dayObj).endOf("week").format("DD MMMM YYYY")}
        </h5>
        <div className="flex gap-2 items-center">
          <button className="p-2" onClick={handlePrev}>
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
          <button className="p-2" onClick={handleNext}>
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

      <div>
        {data.length > 0 &&
          data.map((e, i) => (
            <div
              key={e.name + i}
              className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-6 border-b border-[#D5D4DF] py-3"
            >
              <div className="col-span-1 capitalize text-red font-bold lg:text-black lg:font-normal">
                {e?.date ? dayjs(e.date).format("dddd DD MMMM") : ""}
              </div>

              <div className="col-span-4 xl:col-span-5">
                {e.name ? e.time + " " + e.name : "Không có sự kiện"}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
  //#endregion
};
