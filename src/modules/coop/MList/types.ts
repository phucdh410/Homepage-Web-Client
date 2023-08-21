export interface ICoopItem {
  id: string;
  tag: string;
  name: string;
  description: string;
  image: string;
}

export interface IMListProps {
  data: ICoopItem[];
}

export interface IMCoopItemProps {
  data: ICoopItem;
}
