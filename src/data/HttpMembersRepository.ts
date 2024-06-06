import { MemberPreview } from "@/models/MemberPreview";
import { MembersRepository } from "./MembersRepository";
import { ShareTransaction } from "@/models/ShareTransaction";

export class HttpMembersRepository implements MembersRepository {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getMembersPreview(searchTerm?: string): Promise<MemberPreview[]> {
    console.log("Searching " + searchTerm);

    if (searchTerm === null) {
      return Promise.resolve([]);
    }

    const response = await fetch(`${this.baseUrl}/members`);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const members = await response.json();

    if (!response.ok) {
      throw new Error(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        members.message || "Something went wrong, failed to send responnse!"
      );
    }

    return members as MemberPreview[];
  }

  async getTransactionsForMember(
    memberid: string
  ): Promise<ShareTransaction[]> {
    throw new Error("Method not implemented.");
  }
}
