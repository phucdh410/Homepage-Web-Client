import { Metadata } from "next";

import { Suspense } from "react";

import { MAIN_BG_ID } from "@/common/constants";
import {
  LCommonData,
  LNewsAndEvents,
  LResearch,
  LTrainings,
  MCommonData,
  MCooperation,
  MNewsAndEvents,
  MResearch,
  MTraining,
} from "@/modules/homepage";
import { IPageProps } from "@/types/page";

interface IHomePageProps extends IPageProps {}

const getData = async () => {
  const res = await fetch(
    "https://axitamin.com.vn/api/knowledges/getBySlug/haha"
  );

  if (!res.ok) throw new Error("Lỗi !!!");

  return res.json();
};

export const generateMetadata = async (): Promise<Metadata> => {
  const data = await getData();

  return {
    title: data.data.title,
    description: "Something",
    openGraph: {
      images:
        "https://cdn.tuoitre.vn/471584752817336320/2023/7/20/xe-dien-o-chau-au-anh-counterpointresearch-16898241932271499450977.jpg",
    },
  };
};

export default async function Home({ params }: IHomePageProps) {
  const data = await getData();

  return (
    <>
      <img
        src="/images/homepage-banner.png"
        alt=""
        className="w-full h-auto object-cover mt-[74px] xl:mt-0"
        id={MAIN_BG_ID} //! DON'T CHANGE THIS ID
      />

      <Suspense fallback={<LCommonData params={params} />}>
        <MCommonData />
      </Suspense>

      <Suspense fallback={<LNewsAndEvents />}>
        <MNewsAndEvents />
      </Suspense>

      <Suspense fallback={<LTrainings />}>
        <MTraining />
      </Suspense>

      <Suspense fallback={<LResearch />}>
        <MResearch />
      </Suspense>

      <MCooperation />
    </>
  );
}
