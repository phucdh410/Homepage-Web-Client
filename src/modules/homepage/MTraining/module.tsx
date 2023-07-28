import { homepageApis } from "@/api";

import { MUi } from "./ui";

export const MTraining = async () => {
  //#region Data
  const data = await homepageApis.getTrainings();
  //#endregion

  //#region Render
  return <MUi data={data} />;
  //#endregion
};
