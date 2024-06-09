import { InterestedPerson } from "@/models/InterestedPerson";
import { JsonInterestedPersonsRepository } from "./JsonInterestedPersonsRepository";

export interface InterestedPersonsRepository {
  getInterestedPersons(
    searchTerm?: string,
    max?: number
  ): Promise<InterestedPerson[]>;

  getInterestedPerson(id: string): Promise<InterestedPerson | null>;
}

const InterestedPersonsSource = new JsonInterestedPersonsRepository();

export default InterestedPersonsSource;
