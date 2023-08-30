"use client";

import { useEffect, useState } from "react";

export const useMouseDirection = () => {
  const [direction, setDirection] = useState<"left" | "right">("left");

  useEffect(() => {
    let oldx = 0;
    const onMouseMove = (e: MouseEvent) => {
      if (e.pageX < oldx) {
        setDirection("left");
      } else if (e.pageX > oldx) {
        setDirection("right");
      }

      oldx = e.pageX;
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return { direction };
};
