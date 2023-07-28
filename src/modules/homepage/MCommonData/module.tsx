import { homepageApis } from "@/api";

import { MUi } from "./ui";

export const MCommonData = async () => {
  //#region Data
  const data = await homepageApis.getCommonData();
  //#endregion

  //#region Render
  return <MUi data={data} />;
  //#endregion
};
