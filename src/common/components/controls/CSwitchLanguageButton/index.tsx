"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";

import { useCallback, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { defaultLocale, LANGUAGES } from "@/app/i18n";
import { useClickOutside } from "@/utils/hooks";

import { CLanguageIcon } from "../../icons";

export const CSwitchLanguageButton = () => {
  //#region Data
  const divRef = useClickOutside(() => setIsOpen(false));

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  //#endregion

  //#region Event
  const open = useCallback(() => setIsOpen(true), []);

  const close = useCallback(() => setIsOpen(false), []);

  const onSelectLang = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    const newLocale =
      LANGUAGES.find((e) => e.value === Number(event.currentTarget.value))
        ?.locale || defaultLocale;

    router.push(pathname, { locale: newLocale });

    close();
  };
  //#endregion

  //#region Render
  return (
    <span className="relative cursor-pointer" onClick={open}>
      <CLanguageIcon />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={divRef}
            key="switch-button"
            initial={{ y: -20, x: "-50%", opacity: 0 }}
            animate={{ y: 5, x: "-50%", opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            className="absolute left-1/2 -translate-x-1/2 translate-y-1 bg-white rounded-md p-1 shadow-[0_0_10px_6px_rgb(0_0_0_/_20%)]"
          >
            <ul>
              {LANGUAGES.map((e) => (
                <li key={e.id} className="text-center">
                  <button
                    onClick={onSelectLang}
                    className={`px-2 py-1 w-full flex items-center justify-start gap-2 
                    ${
                      locale === e.locale && "bg-slate-200"
                    } hover:bg-[rgb(0_0_0_/_6%)] text-sm ${
                      locale === e.locale
                        ? "text-red font-bold"
                        : "text-sub font-medium"
                    }`}
                    value={e.value}
                  >
                    <img src={e.flag} alt="" className="max-w-[16px] h-auto" />
                    {e.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
  //#endregion
};
