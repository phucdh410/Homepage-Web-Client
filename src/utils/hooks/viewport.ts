import { useCallback, useEffect, useState } from "react";

export const useMediaQuery = () => {
  //#region Data
  const [currentWidth, setCurrentWidth] = useState<number>(window.screen.width);
  //#endregion

  //#region Event

  const updateWidth = useCallback(() => {
    setCurrentWidth(window.screen.width);
  }, []);
  //#endregion

  //#region Cycle
  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [updateWidth]);

  //#endregion

  return { currentWidth };
};
