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
        className="flex flex-col xl:flex-row items-center justify-between 2xl:h-[720px] !bg-no-repeat !bg-cover !bg-[50% center] !text-white"
        style={{
          background: `linear-gradient(91deg, rgba(0, 0, 0, 0.00) 52.34%, rgba(0, 0, 0, 0.80) 100%), url('${backgroundImage}'), lightgray 50% / cover no-repeat`,
        }}
      >
        <div className="ml-4 mr-4 xl:mr-0 md:ml-6 xl:ml-10 mt-header xl:max-w-xl">
          <h3 className="uppercase font-serif4 text-clamp-section-title font-bold mb-10px select-none">
            {currentData.name}
          </h3>
          <p className="mb-5 xl:mb-[50px] text-clamp16px tracking-0.64px select-none">
            {currentData.description}
          </p>
          <Link
            href={currentData.href}
            className="inline-block rounded-10px backdrop-blur-[7.5px] bg-[rgba(255,_255,_255,_0.40)] py-3 2xl:py-4 px-6 2xl:px-20"
          >
            Xem chi tiết
          </Link>
        </div>
        <SimpleBar className="bg-black bg-opacity-50 p-5 min-w-[330px] xl:mt-header self-stretch">
          <ul>
            {data.map((e) => (
              <li key={e.id} className="mb-[15px] last:mb-0 text-right">
                <button
                  onClick={onUpdateCurrentData(e)}
                  className="p-10px uppercase text-right font-serif4 font-bold text-md md:text-lg xl:text-xl hover:text-red"
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
