"use client";

import { useEffect } from "react";

import { ICButtonProps } from "./types";

import "./styles.scss";

export const CButton: React.FC<ICButtonProps> = ({ children, ...props }) => {
  useEffect(() => {
    [].map.call(
      document.querySelectorAll('[data-anim="ripple"]'),
      (el: HTMLButtonElement) => {
        el.addEventListener("click", (e) => {
          //   e = e.touches ? e.touches[0] : e;

          const r = el.getBoundingClientRect(),
            d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
          el.style.cssText = `--s: 0; --o: 1;`;
          el.offsetTop;
          el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${
            e.clientX - r.left
          }; --y:${e.clientY - r.top};`;
        });
      }
    );
  }, []);

  return (
    <button data-anim="ripple" {...props}>
      {children}
    </button>
  );
};
