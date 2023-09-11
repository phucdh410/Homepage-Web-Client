import Link from "next-intl/link";

import { forwardRef, useImperativeHandle, useState } from "react";

import { motion, Variants } from "framer-motion";

import { CChevronRightIcon, CCloseIcon } from "@/common/components/icons";

import { ICListMenuProps, ICListMenuRef } from "./types";

const ADDITIONAL_NAV = [
  { id: "1", name: "Thông báo", link: "" },
  { id: "2", name: "Đăng ký học phần", link: "" },
  { id: "3", name: "Webmail", link: "" },
];

const animationVariants: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" } },
};

import { Popover } from "@headlessui/react";

import "./styles.scss";

export const CListMenu = forwardRef<ICListMenuRef, ICListMenuProps>(
  ({ data }, ref) => {
    //#region Data
    const [subId, setSubId] = useState<string | null>(null);
    //#endregion

    //#region Event
    const onOpen = (id: string) => setSubId(id);
    //#endregion

    useImperativeHandle(ref, () => ({
      clearSubId: () => setSubId(null),
    }));

    //#region Render
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={`w-full navigation-list-menu !bg-center !bg-no-repeat !bg-cover block`}
      >
        <motion.div
          variants={animationVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex text-primary p-30px mb-2">
            <div className="max-w-[253px] mr-10 select-none">
              <h2 className="font-bold font-serif4 text-[40px]">{data.name}</h2>
              <p className="font-serif4">{data.description}</p>
            </div>
            <div className="max-w-[262px] mr-7">
              <ul>
                {data.children?.map((e) => (
                  <li
                    key={e.id}
                    className="font-serif4 w-fit font-bold text-xl whitespace-nowrap pb-[15px] last:pb-0 group hover:text-primary-red hover:underline cursor-pointer"
                  >
                    {e?.children ? (
                      <div
                        className="flex items-center gap-2"
                        onClick={() => onOpen(e.id)}
                      >
                        {e.name}
                        <CChevronRightIcon className="fill-[#969696] group-hover:fill-red" />
                      </div>
                    ) : (
                      <Popover.Button as={Link} href={e.link || ""}>
                        {e.name}
                      </Popover.Button>
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
                      <Popover.Button as={Link} href={el.link || ""}>
                        {el.name}
                      </Popover.Button>
                    </li>
                  ))}
                </ul>
              ))}
          </div>
          <div className="w-full flex items-center justify-between border border-solid border-t-[rgba(25,_25,_25,_0.20)] py-4 px-7">
            <ul className="flex items-center gap-10">
              {ADDITIONAL_NAV.map((e) => (
                <li key={e.id} className="text-sub text-sm tracking-0.42px">
                  <Popover.Button as={Link} href={e.link}>
                    {e.name}
                  </Popover.Button>
                </li>
              ))}
            </ul>
            <Popover.Button className="font-serif4 font-bold flex items-center gap-2">
              Close
              <CCloseIcon />
            </Popover.Button>
          </div>
        </motion.div>
      </motion.div>
    );
    //#endregion
  }
);

CListMenu.displayName = "CListMenu";
