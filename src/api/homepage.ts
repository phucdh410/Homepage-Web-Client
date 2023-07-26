import { HOMEPAGE_URL } from "./url";

export const homepageApis = {
  getCommonData: async () => {
    function aaA(): Promise<{
      establish: number;
      school_members: number;
      rooms: number;
      phanhieu: number;
      departments: number;
      students: number;
    }> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            establish: 1976,
            school_members: 311,
            rooms: 15,
            phanhieu: 1,
            departments: 16,
            students: 30748,
          });
        }, 1500);
      });
    }
    const res = await aaA();
    return res;

    // const res = await fetch(HOMEPAGE_URL.GET_COMMON_DATA);

    // if (!res.ok) throw new Error("Lấy thông tin số liệu không thành công!");

    // return res.data.json();
  },
};
