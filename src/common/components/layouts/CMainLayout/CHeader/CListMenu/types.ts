import { INavItem } from "../types";

export interface ICListMenuProps {
  data: INavItem;
  onClose: () => void;
  currentId: string;
}

export interface ICListMenuRef {
  clearSubId: () => void;
}
