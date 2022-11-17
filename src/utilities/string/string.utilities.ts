import { v4 as uuid } from "uuid";

export class StringUtilitiesImpl {
  static createRandomUUID(): string {
    return uuid();
  }
}
