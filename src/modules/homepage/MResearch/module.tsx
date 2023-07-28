import { homepageApis } from "@/api";

import { MUi } from "./ui";

export const MResearch = async () => {
  //#region Data
  const data = await homepageApis.getResearch();
  //#endregion

  //#region Render
  return <MUi data={data} />;
  //#endregion
};
