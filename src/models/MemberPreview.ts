export enum MemberType {
  PRIVATE = "private",
  INSTITUTIONAL = "institutional",
}
export interface MemberPreview {
  id: string;
  type: MemberType;
  label1: string;
  label2: string;
  email: string;
  shares: number;
}
