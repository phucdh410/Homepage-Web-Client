import { MUi } from "./ui";

const MOCK_OBJECT = {
  image: "/images/coop-item.png",
  tag: "sự kiện",
  name: "Gần 700 chiến sĩ Mùa hè xanh HCMUE lên đường làm nhiệm vụ.",
  description:
    "Trường Đại học Sư phạm Thành phố Hồ Chí Minh là “cái nôi” của chiến dịch Mùa hè, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero",
  // type: 1 "Domestic" | 2 "International"
};

const MOCK_DATA = Array(12)
  .fill(MOCK_OBJECT)
  .map((e, i) => ({
    ...e,
    id: (i + 1).toString(),
    name: e.name + (i + 1),
    type: Math.round(Math.random() * 1 + 1),
  }));

export const MList = async () => {
  //#region Data
  //   const data = await coopApis.getAll();
  //#endregion

  //#region Render
  return <MUi data={MOCK_DATA} />;
  //#endregion
};
