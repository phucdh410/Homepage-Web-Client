"use client";

import Link from "next-intl/link";

import { useEffect } from "react";

import { IErrorPageProps } from "@/types/error";

const Error = ({ error, reset }: IErrorPageProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="page_error bg-white h-[100vh] text-center flex flex-col items-center justify-center">
      <h1 className="font-raleway pt-10 font-bold text-primary text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
        500
      </h1>

      <div className="max-w-[1200px] xl:max-w-[600px] 2xl:max-w-[1200px]">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt=""
          loading="lazy"
          className="aspect-[4/2] w-full object-cover h-auto"
        />
      </div>

      <div>
        <h3 className="font-bold text-3xl pb-3">Ops lỗi rồi</h3>

        <p className="text-lg leading-6 pb-3">Là do tui, không phải bạn...</p>
        <p className="text-lg leading-6">Lỗi tui, lỗi tại tui hết!</p>

        <Link
          href={"/"}
          className="rounded-10px my-5 block py-4 px-6 bg-primary text-white font-medium"
        >
          Về trang chủ
        </Link>
      </div>
    </section>
  );
};

export default Error;
