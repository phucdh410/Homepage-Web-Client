"use client";

import { useLocale } from "next-intl";

import { useMemo } from "react";

import en from "dayjs/locale/en";
import vi from "dayjs/locale/vi";

import day from "@/lib/dayjs";

export const useDayjs = () => {
  const locale = useLocale();

  const dayjs = useMemo(() => {
    if (locale === "en") {
      day.locale({
        ...en,
        weekStart: 1,
        weekdaysMin: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      });
    } else {
      day.locale({
        ...vi,
        weekdaysMin: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
      });
    }

    return day;
  }, [locale]);

  return dayjs;
};
