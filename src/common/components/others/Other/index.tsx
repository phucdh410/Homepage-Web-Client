"use client";

import { useState } from "react";

import { CModal } from "../CModal";

export const Other = () => {
  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => setOpen(true);

  const onClose = () => setOpen(false);

  return (
    <div>
      <button onClick={openModal}>Toggle modal</button>
      <CModal open={open} onClose={onClose} />
    </div>
  );
};
