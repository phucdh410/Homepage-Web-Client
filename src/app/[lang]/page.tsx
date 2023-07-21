// import { getDictionary } from "@/dictionaries";
import { Metadata } from "next";

import {
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
  // const d = await getDictionary(params.lang)
  const data = await getData();

  return (
    <>
      <img
        src="/images/homepage-banner.png"
        alt=""
        className="w-full h-auto object-cover mt-[74px] xl:mt-0"
      />

      <MCommonData />

      <MNewsAndEvents />

      <MTraining />

      <MResearch />

      <MCooperation />
    </>
  );
}
