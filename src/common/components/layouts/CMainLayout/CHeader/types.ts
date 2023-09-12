export interface INavItem {
  id: string;
  name: string;
  description?: string;
  link?: string;
  children?: INavItem[];
  hrefId?: string;
}
