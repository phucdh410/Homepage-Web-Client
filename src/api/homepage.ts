import { delay } from "@/utils/funcs";

// import { HOMEPAGE_URL } from "./url";

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
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            establish: 1976,
            school_members: 311,
            rooms: 15,
            phanhieu: 1,
            departments: 16,
            students: 30748,
          });
        }, 2000);
      });
    }
    const res = await aaA();
    return res;

    // try {
    //   const res = await fetch(HOMEPAGE_URL.GET_COMMON_DATA);
    //   if (res.ok) {
    //     const { data }: TypeResponse = await res.json();
    //     return data;
    //   }
    // } catch (error) {
    //   throw new Error("Lỗi rồi bà già ơi !!!");
    // }
  },
  getNewsAndEvents: async () => {
    function aaA(): {
      id: string;
      image?: string;
      video?: string;
      tag: string;
      title: string;
      description: string;
      slug: string;
    }[] {
      return [
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
      ];
    }

    const res = await delay(aaA, 2000);
    return res;

    // const res = await fetch(HOMEPAGE_URL.GET_COMMON_DATA);

    // if (!res.ok) throw new Error("Lấy dữ liệu không thành công!");

    // return res.data.json();
  },
  getTrainings: async () => {
    function aA() {
      return [
        {
          id: "1",
          tag: "đại học chính quy",
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
          image: "/images/training1.png",
        },
        {
          id: "2",
          tag: "đại học chính quy",
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
          image: "/images/training2.png",
        },
        {
          id: "3",
          tag: "đại học chính quy",
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
          image: "/images/training2.png",
        },
        {
          id: "4",
          tag: "đại học chính quy",
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
          image: "/images/training2.png",
        },
      ];
    }

    const res = await delay(aA, 2000);

    return res;
  },
  getResearch: async () => {
    function aA() {
      return [
        {
          id: "1",
          image: "/images/research.png",
          tag: "công bố quốc tế",
          title: "Ký kết hợp đồng đào tạo giáo viên theo nghị định 116/202...",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...",
        },
        {
          id: "2",
          image: "/images/research.png",
          tag: "công bố quốc tế",
          title: "Ký kết hợp đồng đào tạo giáo viên theo nghị định 116/202...",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...",
        },
        {
          id: "3",
          image: "/images/research.png",
          tag: "công bố quốc tế",
          title: "Ký kết hợp đồng đào tạo giáo viên theo nghị định 116/202...",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...",
        },
        {
          id: "4",
          image: "/images/research.png",
          tag: "công bố quốc tế",
          title: "Ký kết hợp đồng đào tạo giáo viên theo nghị định 116/202...",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...",
        },
        {
          id: "5",
          image: "/images/research.png",
          tag: "công bố quốc tế",
          title: "Ký kết hợp đồng đào tạo giáo viên theo nghị định 116/202...",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...",
        },
        {
          id: "6",
          image: "/images/research.png",
          tag: "công bố quốc tế",
          title: "Ký kết hợp đồng đào tạo giáo viên theo nghị định 116/202...",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...",
        },
        {
          id: "7",
          image: "/images/research.png",
          tag: "công bố quốc tế",
          title: "Ký kết hợp đồng đào tạo giáo viên theo nghị định 116/202...",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...",
        },
      ];
    }

    const res = await delay(aA, 2000);

    return res;
  },
};
