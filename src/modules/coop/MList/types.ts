export interface ICoopItem {
  id: string;
  tag: string;
  name: string;
  description: string;
  image: string;
  type: 1 | 2;
}

export interface IMListProps {
  data: ICoopItem[];
}

export interface IMCoopItemProps {
  data: ICoopItem;
}
