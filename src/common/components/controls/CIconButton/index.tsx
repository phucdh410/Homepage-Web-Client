import { ICIconButtonProps } from "./types";

export const CIconButton: React.FC<ICIconButtonProps> = ({ icon, onClick }) => {
  return <button onClick={onClick}>{icon}</button>;
};
