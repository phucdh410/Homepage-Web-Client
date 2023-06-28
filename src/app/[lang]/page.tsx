// import { getDictionary } from "@/dictionaries";
import {
  MCommonData,
  MCooperation,
  MNewsAndEvents,
  MResearch,
  MTraining,
} from "@/modules/homepage";
import { IPageProps } from "@/types/page";

interface IHomePageProps extends IPageProps {}

export default async function Home({ params }: IHomePageProps) {
  // const d = await getDictionary(params.lang)

  return (
    <>
      <img
        src="/images/homepage-banner.png"
        alt=""
        className="w-full h-auto object-cover"
      />

      <MCommonData />

      <MNewsAndEvents />

      <MTraining />

      <MResearch />

      <MCooperation />
    </>
  );
}
