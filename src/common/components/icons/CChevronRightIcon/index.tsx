import { IBaseIcon } from "../types";

export const CChevronRightIcon: React.FC<IBaseIcon> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      className={className}
    >
      <path d="M7.49998 6.09221C7.17498 6.41721 7.17498 6.94221 7.49998 7.26721L10.7333 10.5005L7.49998 13.7339C7.17498 14.0589 7.17498 14.5839 7.49998 14.9089C7.82498 15.2339 8.34998 15.2339 8.67498 14.9089L12.5 11.0839C12.825 10.7589 12.825 10.2339 12.5 9.90888L8.67498 6.08388C8.35831 5.76721 7.82498 5.76721 7.49998 6.09221Z" />
    </svg>
  );
};
