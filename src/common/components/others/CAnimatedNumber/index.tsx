"use client";

import { useEffect, useRef } from "react";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { ICAnimatedNumberProps } from "./types";

export const CAnimatedNumber: React.FC<ICAnimatedNumberProps> = ({
  from,
  to,
}) => {
  //#region Ref
  const nodeRef = useRef<null | HTMLSpanElement>(null);
  const inView = useInView(nodeRef);
  //#endregion

  //#region Data
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest || 0));
  //#endregion

  //#region Cycle
  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 0.85 });
    }
  }, [count, inView, to]);
  //#endregion

  //#region Render
  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
  //#endregion
};

CAnimatedNumber.defaultProps = {
  from: 0,
};
