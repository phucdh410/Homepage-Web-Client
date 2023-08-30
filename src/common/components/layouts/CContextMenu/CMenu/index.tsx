"use client";

import icon1 from "./icon1.gif";
import icon2 from "./icon2.gif";
import icon3 from "./icon3.gif";
import icon4 from "./icon4.gif";
import icon5 from "./icon5.gif";

const goPig = () => {
  window.open(
    "https://www.google.com/maps/place/Tr%E1%BA%A1i+heo+r%E1%BB%ABng+B%C3%ACnh+D%C6%B0%C6%A1ng/@10.900562,106.738243,17z/data=!3m1!4b1!4m6!3m5!1s0x3174d9749a61999f:0x354d545488bb89b!8m2!3d10.9005567!4d106.7408179!16s%2Fg%2F11kjh4sy5t?entry=ttu",
    "_blank"
  );
};

const notThing = () => {
  window.open(
    "https://www.google.com/maps/place/Heo+m%E1%BA%B9t+68/@10.9005829,106.7330931,15z/data=!4m10!1m2!2m1!1sheo+cong+nghiep!3m6!1s0x3174d9d5af21952d:0x9c93d6b6288a64a!8m2!3d10.9062297!4d106.7434252!15sCg9oZW8gY29uZyBuZ2hpZXBaESIPaGVvIGNvbmcgbmdoaWVwkgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSSGFEZGZlVlpSRUFF4AEA!16s%2Fg%2F11fp92_cp0?entry=ttu",
    "_blank"
  );
};

const reload = () => {
  window.location.reload();
};

const goYoutube = () => {
  window.open("https://youtube.com", "_blank");
};

const goPolice = () => {
  window.open(
    "https://www.google.com/maps/place/C%C3%B4ng+An+Ph%C6%B0%E1%BB%9Dng+22+B%C3%ACnh+Th%E1%BA%A1nh/@10.7899247,106.7115247,17z/data=!3m1!4b1!4m6!3m5!1s0x317528ad18f8b025:0xf43d6c5720e2b1b6!8m2!3d10.7899194!4d106.7140996!16s%2Fg%2F1tfglx00?entry=ttu",
    "_blank"
  );
};

const MOCK = [
  { id: 1, name: "Liên hệ anh Phương", icon: icon1, func: goPig },
  { id: 2, name: "Liên hệ anh Phúc", icon: icon2, func: notThing },
  { id: 3, name: "Đi qua Youtube", icon: icon3, func: goYoutube },
  { id: 4, name: "Báo công an", icon: icon4, func: goPolice },
  { id: 5, name: "Lỗi web bấm NGAY", icon: icon5, func: reload },
];

export const CMenu = () => {
  return (
    <ul className="rounded-20px">
      {MOCK.map((item) => (
        <li key={item.id} className="mb-1 last:mb-0 w-full">
          <button
            onClick={item.func}
            className="relative w-full py-1 px-3 rounded-10px flex items-center gap-2  hover:shadow-[0_0px_8px_5px_rgb(0_0_0_/_8%)]"
          >
            <img
              src={item.icon.src}
              alt=""
              className="shrink-0 aspect-square max-h-[32px] mix-blend-multiply"
            />
            <span className="flex-1 font-montserrat font-semibold text-left">
              {item.name}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};
