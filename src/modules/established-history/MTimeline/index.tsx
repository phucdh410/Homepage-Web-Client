import { useMemo } from "react";

import classNames from "classnames";

import { MTimelineNodeIcon } from "./MTimelineNodeIcon";

const MOCK = [
  {
    id: 1,
    year: 1957,
    name: "Tiền thân của Trường là Đại học Sư phạm Sài Gòn",
    nodes: [
      {
        id: 1,
        year: 1960,
        content:
          "1965: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus",
        image: "/images/history.png",
      },
      {
        id: 2,
        year: 1970,
        content:
          "1965: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus",
        image: "/images/history.png",
      },
      {
        id: 3,
        year: 1986,
        content:
          "1965: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus",
        image: "/images/history.png",
      },
      {
        id: 4,
        year: 1990,
        content:
          "1965: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus",
        image: "/images/history.png",
      },
      {
        id: 5,
        year: 1996,
        content:
          "1965: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus",
        image: "/images/history.png",
      },
    ],
  },
  {
    id: 2,
    year: 2000,
    name: "Lorem ipsum dolor sit amet consectetur adipiscing elit nulla viverra",
    nodes: [
      {
        id: 1,
        year: 1960,
        content:
          "1965: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus",
        image: "/images/history.png",
      },
      {
        id: 2,
        year: 1970,
        content:
          "1965: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus",
        image: "/images/history.png",
      },
    ],
  },
  {
    id: 3,
    year: 2023,
    name: "Ngôi làng đầy lá của cậu bé tóc vàng mồ côi cha mẹ, bị yêu hồ nhập vào bao tử",
    nodes: [
      {
        id: 1,
        year: 1960,
        content:
          "1965: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, risus non lobortis feugiat, eros nisi gravida libero, a laoreet velit enim a diam. Vestibulum fermentum, sapien vel pulvinar tempor, ligula justo vestibulum lectus",
        image: "/images/history.png",
      },
    ],
  },
];

export const MTimeline = () => {
  const _items = useMemo(() => {
    let _index = -1;
    return MOCK.map(({ nodes, ..._item }) => {
      return {
        ..._item,
        nodes: nodes.map((_node) => {
          return {
            ..._node,
            right: ++_index % 2 === 0,
          };
        }),
      };
    });
  }, []);

  return (
    <section className="mt-16">
      <div className="container">
        <div className="mx-14 ">
          {_items.map((headTime, i) => (
            <div key={headTime.id}>
              <div className="head-time-title my-30px select-none text-center m-auto max-w-[450px] text-primary">
                <h5 className="text-35px tracking-1.05px font-extrabold mb-10px">
                  {headTime.year}
                </h5>
                <p className="text-25px font-bold tracking-0.75px font-serif4">
                  {headTime.name}
                </p>
              </div>
              <div className="relative py-16">
                <div className="absolute w-[3px] min-h-full top-0 left-1/2 translate-x-[calc(-50%+0.5px)] bg-red"></div>
                {headTime.nodes.map((timeNode) => (
                  <div
                    key={timeNode.id}
                    className={classNames(
                      timeNode.right ? "flex-row" : "flex-row-reverse",
                      "flex justify-center mb-28 last:mb-0"
                    )}
                  >
                    <img
                      src={timeNode.image}
                      className="rounded-10px aspect-[369/235]"
                      alt=""
                    />
                    <MTimelineNodeIcon />
                    <div className="max-w-[369px]">
                      <h6
                        className={classNames(
                          timeNode.right ? "text-left" : "text-right",
                          "pb-3 text-primary text-25px font-semibold tracking-0.75px mb-10px"
                        )}
                      >
                        {timeNode.year}
                      </h6>
                      <div className="bg-primary p-15px rounded-15px text-white">
                        {timeNode.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="max-w-[700px] mt-10 mb-16 text-center m-auto">
            Hiện nay trường là một trong 22 trường Đại học trọng điểm Quốc gia
            và là 1 trong 2 trường Đại học Sư phạm trọng điểm của cả nước, đóng
            vai trò nóng cốt, đầu tàu đối với hệ thống các trường sư phạm và phổ
            thông ở phía Nam. Bộ GD & ĐT, Ủy ban nhân dân TP.HCM và các địa
            phương tặng nhiều Bằng khen cho các hoạt động đào tạo, NCKH, phong
            trào, đoàn thể của Trường.
          </p>
        </div>
      </div>
    </section>
  );
};
