import { forwardRef, useImperativeHandle, useState } from "react";

import { convertNumberToTime } from "@/utils/funcs";

export interface IVideoProgressRef {
  timeUpdate: (numb: number) => void;
}

interface IProps {
  duration: number;
  onDrag: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CVideoProgress = forwardRef<IVideoProgressRef, IProps>(
  ({ duration, onDrag }, ref) => {
    //#region Data
    const [currentTime, setCurrentTime] = useState<number>(0);
    //#endregion

    useImperativeHandle(ref, () => ({
      timeUpdate: (numb: number) => {
        setCurrentTime(numb);
      },
    }));

    //#region Render
    return (
      <div className="flex items-center justify-center gap-2 pb-1">
        <span className="text-white select-none">
          {convertNumberToTime(currentTime) || "00:00"}
        </span>
        <input
          type="range"
          className="flex-1 accent-[#124874]"
          value={currentTime}
          onChange={onDrag}
          min={0}
          max={duration || 0}
          step={duration ? duration / 1000000 : 0}
        />
        <span className="text-white select-none">
          {duration ? convertNumberToTime(duration) : "00:00"}
        </span>
      </div>
    );
    //#endregion
  }
);

CVideoProgress.displayName = "CVideoProgress";
