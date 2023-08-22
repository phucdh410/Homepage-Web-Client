import { useState } from "react";

import dayjs from "dayjs";
import vi from "dayjs/locale/vi";
import weekday from "dayjs/plugin/weekday";

import { miniRange } from "@/utils/funcs";

dayjs.extend(weekday);
dayjs.locale(vi);

const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const today = dayjs();

export const MCalendar = () => {
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

  const handlePrev = () => {
    setDayObj(dayObj.subtract(1, "month"));
  };

  const handleNext = () => {
    setDayObj(dayObj.add(1, "month"));
  };

  return (
    <>
      <button onClick={handlePrev}>Left</button>
      <button onClick={handleNext}>Right</button>
      <div className="grid grid-cols-7">
        {weekDays.map((day, i) => (
          <div key={i}>{day}</div>
        ))}
        {miniRange(firstWeekday).map((e, i) => (
          <div key={i}>
            {firstDayOfThisMonth.subtract(firstWeekday - e, "day").date()}
          </div>
        ))}
        {miniRange(daysInMonth).map((e, i) => (
          <div key={i}>{e + 1}</div>
        ))}
        {miniRange(6 - lastWeekday).map((e, i) => (
          <div key={i}>{lastDayOfThisMonth.add(e + 1, "day").date()}</div>
        ))}
      </div>
    </>
  );
};
