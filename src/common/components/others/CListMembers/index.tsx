"use client";

import { useMemo } from "react";

import { ICListMembersProps } from "./types";

export const CListMembers: React.FC<ICListMembersProps> = ({ data }) => {
  //#region Data
  const members = useMemo(() => {
    const ar1: { id: string; name: string }[] = [];
    const ar2: { id: string; name: string }[] = [];
    data.members.forEach((e, i) => {
      if (i % 2 !== 0) ar1.push(e);
      else ar2.push(e);
    });
    return [ar1, ar2];
  }, [data.members]);
  //#endregion

  //#region Render
  return (
    <div className="mb-12 grid grid-cols-3 gap-30px">
      <div>
        <h3 className="mb-5 font-serif4 font-bold tracking-1.2px text-primary text-40px">
          {data.name}
        </h3>
        <p className="text-sub">{data.description}</p>
      </div>
      <div className="rounded-20px bg-primary p-30px">
        <ul>
          {members[0].map((item) => (
            <li
              key={item.id}
              className="font-raleway text-white tracking-0.48px mb-[15px] last:mb-0"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-20px bg-primary p-30px">
        <ul>
          {members[0].map((item) => (
            <li
              key={item.id}
              className="font-raleway text-white tracking-0.48px mb-[15px] last:mb-0"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  //#endregion
};
