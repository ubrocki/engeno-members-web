import { faker } from "@faker-js/faker";
import { InterestedPerson } from "@/models/InterestedPerson";

const INTERESTED: InterestedPerson[] = [];

for (let i = 1; i <= 50; i++) {
  INTERESTED.push({
    id: faker.string.uuid(),
    lastname: faker.person.lastName(),
    firstname: faker.person.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    firstContact: faker.date.recent(),
  } as InterestedPerson);
}

export default INTERESTED;
