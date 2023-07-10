"use client";

import { useRef } from "react";

import { ICDrawerRef } from "./CDrawer/types";
import { CDrawer } from "./CDrawer";

export const CMobileHeader = () => {
  //#region Data
  const drawerRef = useRef<null | ICDrawerRef>(null);
  //#endregion

  //#region Event
  const openDrawer = () => {
    drawerRef.current?.open();
  };
  //#endregion

  //#region Render
  return (
    <header className="fixed z-10 top-0 w-full flex xl:hidden items-center justify-between p-5 bg-white mb-20 shadow-[0_5px_12px_2px_rgb(194_194_194_/_51%)] ">
      <img src="/images/logo.png" alt="" />
      <button onClick={openDrawer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="36px"
          height="36px"
        >
          <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z" />
        </svg>
      </button>

      <CDrawer ref={drawerRef} />
    </header>
  );
  //#endregion
};
