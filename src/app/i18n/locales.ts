import { I18NConfig } from "next/dist/server/config-shared";

export const LANGUAGES = [
  { id: "1", name: "VI", value: 1, locale: "vi" },
  { id: "2", name: "EN", value: 2, locale: "en" },
];
export const defaultLocale = "vi";
export const locales = [defaultLocale, "en"];

export const i18n: I18NConfig = {
  locales: [defaultLocale, "en"],
  defaultLocale,
  localeDetection: false,
};

export type TLocale = "vi" | "en";
