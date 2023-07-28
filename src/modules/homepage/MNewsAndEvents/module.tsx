import { homepageApis } from "@/api";

import { MUi } from "./ui";

export const MNewsAndEvents = async () => {
  //#region Data
  const data = await homepageApis.getNewsAndEvents();
  //#endregion

  //#region Render
  return <MUi data={data} />;
  //#endregion
};
