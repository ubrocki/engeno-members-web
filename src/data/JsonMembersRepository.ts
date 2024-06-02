import { MemberPreview } from "@/models/MemberPreview";
import { MembersRepository } from "./MembersRepository";
import MEMBERS from "./available-members";

export class JsonMembersRepository implements MembersRepository {
  async getMembersPreview(searchTerm?: string): Promise<MemberPreview[]> {
    // Simulate a delay with setTimeout
    return new Promise((resolve) => {
      setTimeout(() => {
        if (searchTerm) {
          const filteredData = MEMBERS.filter((member: MemberPreview) =>
            member.label1.includes(searchTerm)
          );
          resolve(filteredData);
        } else {
          resolve(MEMBERS);
        }
      }, 2000); // delay of 1 second
    });
  }
}
