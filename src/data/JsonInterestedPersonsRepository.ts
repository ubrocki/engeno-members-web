import { InterestedPerson } from "@/models/InterestedPerson";
import { InterestedPersonsRepository } from "./InterestedPersonsRepository";
import INTERESTED from "./available-interested-persons";

export class JsonInterestedPersonsRepository
  implements InterestedPersonsRepository
{
  getInterestedPerson(id: string): Promise<InterestedPerson | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const interested = INTERESTED.find((i) => i.interestedId === id);
        if (interested) {
          resolve(interested);
        } else {
          null;
        }
      }, 1500); // delay of 1 second
    });
  }

  getInterestedPersons(
    searchTerm?: string,
    max?: number
  ): Promise<InterestedPerson[]> {
    // Simulate a delay with setTimeout
    return new Promise((resolve) => {
      setTimeout(() => {
        if (searchTerm) {
          const filteredData = INTERESTED.filter(
            (interested: InterestedPerson) =>
              interested.lastname.includes(searchTerm) ||
              interested.firstname.includes(searchTerm)
          );
          resolve(filteredData);
        } else {
          resolve(INTERESTED);
        }
      }, 2000); // delay of 1 second
    });
  }
}
