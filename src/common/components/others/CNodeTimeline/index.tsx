"use client";

import { useMediaQuery } from "@/utils/hooks";

import { ICNodeTimelineProps } from "./types";

import "./styles.scss";

export const CNodeTimeline: React.FC<ICNodeTimelineProps> = ({ timelines }) => {
  //#region Data
  const { currentWidth } = useMediaQuery();
  //#endregion

  //#region Render
  return currentWidth < 768 ? (
    <div className="mx-10 mb-16">
      <ul>
        {timelines.map((e) => (
          <li
            key={e.id}
            className="border-l-[3px] border-[#CF373D] border-solid pl-8 pb-10 last:pb-0 relative before:content-'' before:h-5 before:w-5 before:rounded-full before:bg-white before:border-solid before:border-[#124874] before:border-[5px] before:absolute before:left-[-11.5px]  "
          >
            <h6 className="text-primary font-bold text-lg font-raleway">
              {e.time}
            </h6>
            <p className="text-primary font-semibold uppercase font-serif4">
              {e.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="rounded-10px mb-32 horizontal-timeline relative h-[5px] w-full bg-[linear-gradient(90deg,_rgba(207,_55,_61,_0.00)_0%,_#CF373D_49.94%,_rgba(207,_55,_61,_0.00)_100%)]">
      <div
        className="flex w-full items-center justify-evenly absolute"
        // Do các node timeline có height: 31px & đường timeline height: 5px
        // Nên vùng chứa node phải translateY = -1 * (heightNode - timelineHeight) / 2
        style={{ transform: "translateY(calc(-1 * (31px - 5px) / 2))" }}
      >
        {timelines.map((e) => (
          <div
            key={e.id}
            className="node-timeline relative h-[31px] w-[31px] bg-primary rounded-full"
          >
            <p
              className="absolute -top-10 left-1/2 whitespace-nowrap font-bold text-lg text-primary font-serif4"
              style={{ transform: "translateX(-50%)" }}
            >
              {e.time}
            </p>
            <p
              className="absolute -bottom-10 left-1/2 whitespace-nowrap uppercase font-bold text-lg text-primary font-serif4"
              style={{ transform: "translateX(-50%)" }}
            >
              {e.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  //#endregion
};
