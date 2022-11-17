export class InvalidUserName extends Error {
  constructor() {
    super("The user name should be a valid string");
  }
}
