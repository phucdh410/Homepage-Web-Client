"use client";

import { useEffect, useState } from "react";

export const CScrollTopButton = () => {
  //#region Data
  const [show, setShow] = useState<boolean>(false);
  //#endregion

  //#region Event
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  //#endregion

  //#region Cycle
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!show && window.scrollY > 0) setShow(true);
      else if (show && window.scrollY === 0) setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [show]);
  //#endregion

  //#region Render
  return (
    <div className="fixed animate-bounce bottom-5 right-5 z-10 rounded-full flex items-center justify-center">
      {show && (
        <button onClick={scrollToTop}>
          <img src="/icons/up-arrow.png" alt="" />
        </button>
      )}
    </div>
  );
  //#endregion
};
