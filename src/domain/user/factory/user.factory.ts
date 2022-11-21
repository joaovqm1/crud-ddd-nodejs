import { StringUtilitiesImpl } from "@/utilities";
import { User } from "../entity";

interface CreateUser {
  name: string;
  email: string;
  username?: string;
}

export class UserFactory {
  static create(params: CreateUser): User {
    return new User(
      StringUtilitiesImpl.createRandomUUID(),
      params.name,
      params.username || params.email,
      params.email,
    );
  }
}
