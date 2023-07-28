export interface INewsAndEventsProps {
  data: {
    id: string;
    image?: string | undefined;
    video?: string | undefined;
    tag: string;
    title: string;
    description: string;
    slug: string;
  }[];
}
