"use client";

import { useCallback, useEffect, useState } from "react";

import { motion, Variants } from "framer-motion";

import { useClickOutside } from "@/utils/hooks";

import { CMenu } from "./CMenu";

const VARIANTS: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, type: "spring", bounce: 0.3 },
  },
};

export const CContextMenu = () => {
  //#region Data
  const [show, setShow] = useState<boolean>(false);

  const contextMenuRef = useClickOutside(() => {
    if (contextMenuRef.current) {
      contextMenuRef.current.style.top = "100%";
      contextMenuRef.current.classList.remove("show");
      setShow(false);
    }
  });
  //#endregion

  //#region Event
  const checkContextMenu = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      // console.log("🚀 ~ file: index.tsx:21 ~ CContextMenu ~ e:", e);
      // console.log(window.getSelection()?.toString());

      if (contextMenuRef.current) {
        setShow(true);
        const menuTarget = contextMenuRef.current;
        menuTarget.classList.add("show");
        menuTarget.style.top = e.clientY + "px";

        if (
          e.clientX + contextMenuRef.current.offsetWidth + 15 >=
          window.innerWidth
        ) {
          menuTarget.style.left = "auto";
          menuTarget.style.right = window.innerWidth - e.clientX + "px";
        } else {
          menuTarget.style.left = e.clientX + "px";
          menuTarget.style.right = "auto";
        }
      }
    },
    [contextMenuRef]
  );
  //#endregion

  useEffect(() => {
    document.addEventListener("contextmenu", checkContextMenu);
    return () => {
      document.removeEventListener("contextmenu", checkContextMenu);
    };
  }, [checkContextMenu]);

  //#region Render
  return (
    <motion.div
      ref={contextMenuRef}
      variants={VARIANTS}
      initial="initial"
      animate={show ? "animate" : "initial"}
      className="fixed origin-top-left -z-10 opacity-0 [&.show]:z-[9999] [&.show]:opacity-100 rounded-20px p-3 bg-[linear-gradient(to_bottom_right,_#edfefd_0%,_#ffe8f0_100%)] shadow-[0_0_0.4rem_rgba(0,_0,_0,_0.16)]"
    >
      <CMenu />
    </motion.div>
  );
  //#endregion
};
