import { ICNodeTimelineProps } from "./types";

import "./styles.scss";

export const CNodeTimeline: React.FC<ICNodeTimelineProps> = ({ timelines }) => {
  return (
    <div className="rounded-[10px] mb-32 horizontal-timeline relative h-[5px] w-full bg-[linear-gradient(90deg,_rgba(207,_55,_61,_0.00)_0%,_#CF373D_49.94%,_rgba(207,_55,_61,_0.00)_100%)]">
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
};
