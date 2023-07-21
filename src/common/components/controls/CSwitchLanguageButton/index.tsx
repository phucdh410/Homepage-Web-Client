"use client";

import { usePathname, useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import { motion } from "framer-motion";

import { defaultLocale, LANGUAGES } from "@/app/i18n";
import { useClickOutside } from "@/utils/hooks";

import { CLanguageIcon } from "../../icons";

export const CSwitchLanguageButton = () => {
  //#region Data
  const divRef = useClickOutside(() => setIsOpen(false));

  const [isOpen, setIsOpen] = useState<boolean>(false);

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

    const locale =
      LANGUAGES.find((e) => e.value === Number(event.currentTarget.value))
        ?.locale || defaultLocale;

    router.push(pathname.replace(/^.{3}/g, locale));

    close();
  };
  //#endregion

  //#region Render
  return (
    <span className="relative cursor-pointer" onClick={open}>
      <CLanguageIcon />
      {isOpen && (
        <motion.div
          ref={divRef}
          className="absolute left-1/2 -translate-x-1/2 translate-y-1 bg-white rounded-md p-1 shadow-[0_0_10px_6px_rgb(0_0_0_/_20%)]"
        >
          <ul>
            {LANGUAGES.map((e) => (
              <li key={e.id} className="text-center">
                <button
                  onClick={onSelectLang}
                  className={`px-3 py-1 w-full hover:bg-[rgb(0_0_0_/_6%)] text-sm ${
                    pathname.includes("/" + e.locale)
                      ? "text-red font-bold"
                      : "text-sub font-medium"
                  }`}
                  value={e.value}
                >
                  {e.name}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </span>
  );
  //#endregion
};
