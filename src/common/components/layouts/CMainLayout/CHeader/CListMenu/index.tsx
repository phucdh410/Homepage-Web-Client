import Link from "next/link";

import { forwardRef, useImperativeHandle, useState } from "react";

import { CCloseIcon } from "@/common/components/icons";

import { ICListMenuProps, ICListMenuRef } from "./types";

const ADDITIONAL_NAV = [
  { id: "1", name: "Thông báo", link: "" },
  { id: "2", name: "Đăng ký học phần", link: "" },
  { id: "3", name: "Webmail", link: "" },
];

export const CListMenu = forwardRef<ICListMenuRef, ICListMenuProps>(
  ({ data, onClose, currentId }, ref) => {
    //#region Data
    const [subId, setSubId] = useState<string | null>(null);
    //#endregion

    //#region Event
    const onOpen = (id: string) => setSubId(id);

    const onCloseSub = () => setSubId(null);
    //#endregion

    useImperativeHandle(ref, () => ({
      clearSubId: () => setSubId(null),
    }));

    //#region Render
    return (
      <div
        className={`w-full !bg-center !bg-no-repeat !bg-cover ${
          currentId === data?.id ? "block" : "hidden"
        }`}
        style={{
          background:
            "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.50) 59.64%, #FFF 100%), url('/images/bg-menu1.png'), lightgray 50%",
        }}
      >
        <div className=" flex text-primary p-[30px] mb-2">
          <div className="max-w-[253px] mr-10 select-none">
            <h2 className="font-bold font-serif4 text-[40px]">{data.name}</h2>
            <p className="font-serif4">{data.description}</p>
          </div>
          <div className="max-w-[262px] mr-7">
            <ul>
              {data.children?.map((e) => (
                <li
                  key={e.id}
                  className="font-serif4 w-fit font-bold text-xl whitespace-nowrap pb-[15px] last:pb-0 hover:text-primary-red hover:underline cursor-pointer"
                >
                  {e?.children ? (
                    <div onClick={() => onOpen(e.id)}>{e.name} &#62;</div>
                  ) : (
                    <Link href={e.link || ""}>{e.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {data?.children
            ?.filter((e) => e?.children)
            .map((e) => (
              <ul
                key={e.id}
                className={`flex-1 max-w-[600px] ${
                  e.id === subId ? "block" : "hidden"
                } `}
              >
                {e?.children?.map((el) => (
                  <li
                    key={el.id}
                    className="text-xl font-serif4 font-bold border-solid border-b border-[#DADADA] pb-[15px] hover:text-primary-red hover:underline"
                  >
                    <Link href={el.link || ""}>{el.name}</Link>
                  </li>
                ))}
              </ul>
            ))}
        </div>
        <div className="w-full flex items-center justify-between border border-solid border-t-[rgba(25,_25,_25,_0.20)] py-4 px-7">
          <ul className="flex items-center gap-10">
            {ADDITIONAL_NAV.map((e) => (
              <li key={e.id} className="text-sub text-sm tracking-[0.42px]">
                <Link href={e.link}>{e.name}</Link>
              </li>
            ))}
          </ul>
          <button
            className="font-serif4 font-bold flex items-center gap-2"
            onClick={onClose}
          >
            Close
            <CCloseIcon />
          </button>
        </div>
      </div>
    );
    //#endregion
  }
);

CListMenu.displayName = "CListMenu";
