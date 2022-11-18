export class InvalidUseId extends Error {
  constructor() {
    super("The user id be a valid string");
  }
}
