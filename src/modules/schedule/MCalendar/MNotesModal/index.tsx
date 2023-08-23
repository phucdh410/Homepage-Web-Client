import { forwardRef, useImperativeHandle, useState } from "react";

import dayjs from "dayjs";

import { CModal } from "@/common/components/others";

import { IDateNote } from "../types";

import { IMNotesModalProps, IMNotesModalRef } from "./types";

export const MNotesModal = forwardRef<IMNotesModalRef, IMNotesModalProps>(
  ({ ...props }, ref) => {
    //#region Data
    const [date, setDate] = useState<string>("");
    const [data, setData] = useState<IDateNote>([]);
    const [open, setOpen] = useState<boolean>(false);
    //#endregion

    //#region Event
    const onClose = () => setOpen(false);
    //#endregion

    useImperativeHandle(ref, () => ({
      open: (date, data) => {
        setOpen(true);
        setData(data);
        setDate(date);
      },
    }));

    //#region Render
    return (
      <CModal onClose={onClose} open={open}>
        {data.length > 0 ? (
          <div>
            <h3 className="uppercase text-2xl mb-3 font-semibold font-serif4">
              {dayjs(date).format("DD MMMM YYYY")}
            </h3>
            {data.map((e, i) => (
              <li
                key={e.name + i}
                className="flex gap-2 list-none pb-2 last:pb-0"
              >
                <div className="text-red text-xl tracking-[0.3px] font-medium font-montserrat">
                  {e.time}
                </div>
                <div className=" text-xl tracking-[0.3px] font-montserrat ">
                  {e.name}
                </div>
              </li>
            ))}
          </div>
        ) : (
          <div>Thông tin trống</div>
        )}
      </CModal>
    );
    //#endregion
  }
);

MNotesModal.displayName = "MNotesModal";
