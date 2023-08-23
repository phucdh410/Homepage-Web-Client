"use client";

import { useCallback, useRef, useState } from "react";

import dayjs from "dayjs";

import { miniRange } from "@/utils/funcs";

import { IMNotesModalRef } from "./MNotesModal/types";
import { MNotesModal } from "./MNotesModal";
import { IDateNote } from "./types";

const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const MOCK: Record<string, IDateNote> = {
  "2023-08-01": [
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
  ],
  "2023-08-06": [
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
  ],
  "2023-08-11": [
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
  ],
  "2023-08-23": [
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
    { time: "09:00", name: "Tiếp đoàn đại biểu aaaa bbbb cccc dddd eeee" },
  ],
};

export const MCalendar = () => {
  //#region Data
  const modalRef = useRef<null | IMNotesModalRef>(null);

  const [dayObj, setDayObj] = useState(dayjs());

  const thisYear = dayObj.year();
  const thisMonth = dayObj.month(); // Month trong dayjs được đánh số từ 0-11, nên để hiển thị đúng phải +1
  const daysInMonth = dayObj.daysInMonth();

  const firstDayOfThisMonth = dayjs(`${thisYear}-${thisMonth + 1}-1`); // Năm - (ThisMonth+1)=Tháng này - Ngày 1
  const firstWeekday = firstDayOfThisMonth.day();

  const lastDayOfThisMonth = dayjs(
    `${thisYear}-${thisMonth + 1}-${daysInMonth}`
  );
  const lastWeekday = lastDayOfThisMonth.day();
  //#endregion

  //#region Event
  const handlePrev = () => {
    setDayObj(dayObj.subtract(1, "month"));
  };

  const handleNext = () => {
    setDayObj(dayObj.add(1, "month"));
  };

  const renderDateNotes = useCallback(
    (dateNum: number) => {
      const date = firstDayOfThisMonth.add(dateNum, "day").format("YYYY-MM-DD");
      if (date in MOCK) {
        const onClick = () => modalRef.current?.open(date, MOCK[date]);
        return (
          <button
            key={new Date().toString() + Math.random() * 10}
            onClick={onClick}
            className="px2 py-1 md:px-2 md:py-2 2xl:px-4 2xl:py-3 bg-white min-h-[60px] md:min-h-[80px] 2xl:min-h-[117px] flex flex-col justify-start items-start font-raleway hover:bg-slate-50"
          >
            <div className="px-2">{dateNum + 1}</div>
            <div className="hidden md:block max-w-full">
              {MOCK[date].map((el, _i) => (
                <div key={_i + el.name} className="flex gap-1">
                  <div className="text-red text-[10px] tracking-[0.3px] font-medium font-montserrat">
                    {el.time}
                  </div>
                  <div className=" text-[10px] tracking-[0.3px] font-medium font-montserrat whitespace-nowrap text-ellipsis overflow-hidden">
                    {el.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="block md:hidden w-full text-center font-bold text-red">
              {MOCK[date].length}
            </div>
          </button>
        );
      } else
        return (
          <div
            key={new Date().toString() + Math.random() * 10}
            className="px2 py-1 md:px-2 md:py-2 2xl:px-4 2xl:py-3 bg-white min-h-[60px] md:min-h-[80px] 2xl:min-h-[117px] flex flex-col justify-start items-start font-raleway hover:bg-slate-50"
          >
            <div className="px-2">{dateNum + 1}</div>
          </div>
        );
    },
    [firstDayOfThisMonth]
  );
  //#endregion

  //#region Render
  return (
    <div className="mx-3 md:mx-5 2xl:mx-10">
      <div className="bg-primary text-white rounded-10px px-5 py-2 flex justify-between items-center mb-3">
        <h5 className="uppercase font-bold font-serif4 text-2xl">
          {dayObj.format("MMMM YYYY")}
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

      <div className="grid grid-cols-7 text-center gap-[1px]">
        {weekDays.map((day, i) => (
          <div key={i} className="text-primary font-semibold font-raleway p-5">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center gap-[1px] bg-[#D5D4DF] border border-[#D5D4DF]">
        {miniRange(firstWeekday).map((e, i) => (
          <div
            key={i}
            className="p-5 bg-[#F2F3F7] text-[#A8A8A8] min-h-[60px] md:min-h-[80px] 2xl:min-h-[117px] flex items-center justify-center font-raleway"
          >
            {firstDayOfThisMonth.subtract(firstWeekday - e, "day").date()}
          </div>
        ))}
        {miniRange(daysInMonth).map((e, i) => renderDateNotes(e))}
        {miniRange(6 - lastWeekday).map((e, i) => (
          <div
            key={i}
            className="p-5 bg-[#F2F3F7] text-[#A8A8A8] min-h-[60px] md:min-h-[80px] 2xl:min-h-[117px] flex items-center justify-center font-raleway"
          >
            {lastDayOfThisMonth.add(e + 1, "day").date()}
          </div>
        ))}
      </div>
      <MNotesModal ref={modalRef} />
    </div>
  );
  //#endregion
};
