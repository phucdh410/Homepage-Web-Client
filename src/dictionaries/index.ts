import { TLocale } from "@/app/i18n";

const dictionaries = {
    vi: () => import("./translate/vi.json").then((module) => module.default),
    en: () => import("./translate/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: TLocale) => dictionaries[locale]();
