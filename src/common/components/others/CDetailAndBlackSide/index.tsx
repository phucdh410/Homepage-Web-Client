"use client";

import Link from "next-intl/link";

import { useState } from "react";

import SimpleBar from "simplebar-react";

import { ICDetailAndBlackSideProps } from "./types";

import "simplebar-react/dist/simplebar.min.css";

export const CDetailAndBlackSide: React.FC<ICDetailAndBlackSideProps> = ({
  data,
  backgroundImage,
}) => {
  //#region Data
  const [currentData, setCurrentData] = useState(data[0]);
  //#endregion

  //#region Event
  const onUpdateCurrentData =
    (newData: {
      id: string;
      name: string;
      description: string;
      href: string;
    }) =>
    () => {
      setCurrentData(newData);
    };
  //#endregion

  //#region Render
  return (
    <section className="container">
      <div
        className="flex items-center justify-between h-[720px] !bg-no-repeat !bg-cover !bg-[50% center] !text-white "
        style={{
          background: `linear-gradient(91deg, rgba(0, 0, 0, 0.00) 52.34%, rgba(0, 0, 0, 0.80) 100%), url('${backgroundImage}'), lightgray 50% / cover no-repeat`,
        }}
      >
        <div className="ml-10 max-w-xl">
          <h3 className="uppercase font-serif4 text-clamp-section-title font-bold mb-10px select-none">
            {currentData.name}
          </h3>
          <p className="mb-[50px] tracking-0.64px select-none">
            {currentData.description}
          </p>
          <button className="rounded-10px backdrop-blur-[7.5px] bg-[rgba(255,_255,_255,_0.40)] py-4 px-20">
            <Link href={currentData.href}>Xem chi tiết</Link>
          </button>
        </div>
        <SimpleBar className="bg-black bg-opacity-50 p-5 min-w-[330px] mt-header self-stretch">
          <ul>
            {data.map((e) => (
              <li key={e.id} className="mb-[15px] last:mb-0 text-right">
                <button
                  onClick={onUpdateCurrentData(e)}
                  className="p-10px uppercase text-right font-serif4 font-bold text-xl hover:text-red"
                >
                  {e.name}
                </button>
              </li>
            ))}
          </ul>
        </SimpleBar>
      </div>
    </section>
  );
  //#endregion
};
