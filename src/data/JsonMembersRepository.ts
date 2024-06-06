import { MemberPreview } from "@/models/MemberPreview";
import { MembersRepository } from "./MembersRepository";
import MEMBERS from "./available-members";
import { ShareTransaction } from "@/models/ShareTransaction";
import TRANSACTIONS from "./available-bookings";

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

  async getTransactionsForMember(
    memberid: string
  ): Promise<ShareTransaction[]> {
    console.log(memberid);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(TRANSACTIONS);
      }, 1200);
    });
  }
}
