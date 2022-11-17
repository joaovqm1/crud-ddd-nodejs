export class InvalidUserEmail extends Error {
  constructor() {
    super("The email should be a valid one");
  }
}
