
import { faker } from '@faker-js/faker';


export class DataGenerator {
  static generateFakeUser() {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email()
    };
  }
}
