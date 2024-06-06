import { MemberPreview } from "@/models/MemberPreview";
// import { HttpMembersRepository } from "./HttpMembersRepository";
import { JsonMembersRepository } from "./JsonMembersRepository";
import { ShareTransaction } from "@/models/ShareTransaction";

export interface MembersRepository {
  getMembersPreview(
    searchTerm?: string,
    max?: number
  ): Promise<MemberPreview[]>;

  getTransactionsForMember(memberid: string): Promise<ShareTransaction[]>;
}

const MembersSource = new JsonMembersRepository();

export default MembersSource;
