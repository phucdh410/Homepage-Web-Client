import { IDateNote } from "../types";

export interface IMNotesModalRef {
  open: (date: string, data: IDateNote) => void;
}

export interface IMNotesModalProps {}
