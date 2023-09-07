export interface IListMembers {
  name: string;
  description: string;
  members: { id: string; name: string }[];
}

export interface ICListMembersProps {
  data: IListMembers;
}
