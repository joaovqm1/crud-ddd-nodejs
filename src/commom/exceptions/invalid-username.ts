export class InvalidUserUsername extends Error {
  constructor() {
    super("The username should be a valid string");
  }
}
