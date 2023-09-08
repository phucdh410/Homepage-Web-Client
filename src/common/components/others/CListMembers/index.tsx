"use client";

import { useMemo } from "react";

import { Variants } from "framer-motion";
import { motion } from "framer-motion";

import { ICListMembersProps } from "./types";

const variants: Variants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};
const itemVariants: Variants = {
  initial: { scale: 0.3, opacity: 0, filter: "blur(20px)" },
  animate: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.2 },
  },
};

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
    <div className="px-4 2xl:px-0 mb-12 grid grid-cols-1 2xl:grid-cols-3 gap-30px select-none">
      <div>
        <h3 className="mb-5 font-serif4 font-bold tracking-1.2px text-primary text-40px">
          {data.name}
        </h3>
        <p className="text-sub">{data.description}</p>
      </div>
      <div className="rounded-20px bg-primary p-30px">
        <motion.ul
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {members[0].map((item) => (
            <motion.li
              key={item.id}
              variants={itemVariants}
              className="font-raleway text-white tracking-0.48px mb-[15px] last:mb-0"
            >
              {item.name}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="rounded-20px bg-primary p-30px">
        <motion.ul variants={variants} initial="initial" whileInView="animate">
          {members[0].map((item) => (
            <motion.li
              key={item.id}
              variants={itemVariants}
              className="font-raleway text-white tracking-0.48px mb-[15px] last:mb-0"
            >
              {item.name}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
  //#endregion
};
