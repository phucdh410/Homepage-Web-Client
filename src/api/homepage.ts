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

    // if (!res.ok) throw new Error("Lấy dữ liệu không thành công!");

    // return res.data.json();
  },
  getNewsAndEvents: async () => {
    function aaA(): Promise<
      {
        id: string;
        image?: string;
        video?: string;
        tag: string;
        title: string;
        description: string;
        slug: string;
      }[]
    > {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            {
              id: "1",
              tag: "đào tạo",
              title:
                "Kỷ niệm 75 nằm ngày thương binh - liệt sĩ 27/7/1947 - 27/7/2022lorem ipsum is a dummy text for Kỷ niệm 75 nằm ngày thương binh- liệt sĩ 27/7/1947 - 27/7/2022 lorem ipsum is a dummy text for",
              description:
                "Thực hiện Hướng dẫn số 63-HD/BTGTW ngày 21/6/2022 về việc tuyêntruyền kỷ niệm 75 năm",
              image: "/images/news1.png",
              slug: "",
            },
            {
              id: "2",
              tag: "đào tạo",
              title:
                "Kỷ niệm 75 nằm ngày thương binh - liệt sĩ 27/7/1947 - 27/7/2022lorem ipsum is a dummy text for Kỷ niệm 75 nằm ngày thương binh- liệt sĩ 27/7/1947 - 27/7/2022 lorem ipsum is a dummy text for",
              description:
                "Thực hiện Hướng dẫn số 63-HD/BTGTW ngày 21/6/2022 về việc tuyêntruyền kỷ niệm 75 năm",
              image: "/images/news2.png",
              video: "/videos/mobile.mp4",
              slug: "",
            },
            {
              id: "3",
              tag: "đào tạo",
              title:
                "Kỷ niệm 75 nằm ngày thương binh - liệt sĩ 27/7/1947 - 27/7/2022lorem ipsum is a dummy text for Kỷ niệm 75 nằm ngày thương binh- liệt sĩ 27/7/1947 - 27/7/2022 lorem ipsum is a dummy text for",
              description:
                "Thực hiện Hướng dẫn số 63-HD/BTGTW ngày 21/6/2022 về việc tuyêntruyền kỷ niệm 75 năm",
              image: "/images/news3.png",
              slug: "",
            },
          ]);
        }, 2000);
      });
    }
    const res = await aaA();
    return res;

    // const res = await fetch(HOMEPAGE_URL.GET_COMMON_DATA);

    // if (!res.ok) throw new Error("Lấy dữ liệu không thành công!");

    // return res.data.json();
  },
};
