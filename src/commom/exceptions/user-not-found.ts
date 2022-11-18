export class UserNotFound extends Error {
  constructor(id: string) {
    super(`The user with id ${id} was not found`);
  }
}
