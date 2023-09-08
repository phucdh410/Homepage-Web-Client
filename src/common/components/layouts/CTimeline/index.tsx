import { CTimelineItem } from "./CTimelineItem";

import "./styles.scss";

export const CTimeline = () => {
  return (
    <div className=" flex justify-center">
      <div className=" max-w-5xl w-full h-auto flex relative pt-10 pb-20">
        <div className="c-timeline w-full">
          <CTimelineItem />
          <CTimelineItem />
          <CTimelineItem />
          <CTimelineItem />
          <CTimelineItem />
        </div>
        <div className="vertical-timeline flex" />
      </div>
    </div>
  );
};
