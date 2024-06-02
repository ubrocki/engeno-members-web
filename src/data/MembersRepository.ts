import { MemberPreview } from "@/models/MemberPreview";
// import { HttpMembersRepository } from "./HttpMembersRepository";
import { JsonMembersRepository } from "./JsonMembersRepository";

export interface MembersRepository {
  getMembersPreview(
    searchTerm?: string,
    max?: number
  ): Promise<MemberPreview[]>;
}

const MembersSource = new JsonMembersRepository();

export default MembersSource;
