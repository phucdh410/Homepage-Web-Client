"use client";
import Link from "next-intl/link";

import { useState } from "react";

import classNames from "classnames";

const MOCK = [
  {
    id: "1",
    name: "đảng bộ trường",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/parties-and-unions/123",
  },
  {
    id: "2",
    name: "đoàn thanh niên",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/parties-and-unions/123",
  },
  {
    id: "3",
    name: "hội sinh viên",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaviverra, risus non lobortis feugiat, eros nisi gravida libero, alaoreet velit enim a diam. Vestibulum fermentum",
    href: "/parties-and-unions/123",
  },
];

export const MList = () => {
  //#region Data
  const [currentData, setCurrentData] = useState(MOCK[0]);
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
          background: `linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0.25%, rgba(0, 0, 0, 0.00) 45.13%), url('/images/dangvadoanthe.png'), lightgray 0px -95.333px / 100% 126.481% no-repeat`,
        }}
      >
        <div className="mt-[104px] ml-10 max-w-xl">
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
        <div className="flex flex-col justify-center p-5 pl-0 min-w-[310px] mt-[104px] self-stretch">
          <ul>
            {MOCK.map((e) => (
              <li key={e.id} className="mb-30px last:mb-0 text-right">
                <button
                  onClick={onUpdateCurrentData(e)}
                  className={classNames(
                    currentData.id === e.id && "bg-white bg-opacity-20",
                    "w-full flex justify-between items-center rounded-[5px] p-10px uppercase text-right font-serif4 font-bold text-xl"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    className={classNames(
                      currentData.id === e.id ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <path
                      d="M13.0785 17.522L16.0462 14.5543C16.4931 14.1074 16.4931 13.3855 16.0462 12.9387L13.0785 9.97096C12.3566 9.26054 11.1191 9.76471 11.1191 10.7845V16.7085C11.1191 17.7397 12.3566 18.2439 13.0785 17.522Z"
                      fill="white"
                    />
                  </svg>
                  <span>{e.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
  //#endregion
};
