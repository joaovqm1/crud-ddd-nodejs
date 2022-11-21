import { User } from "../entity";
import { UserFactory } from "./user.factory";

describe("User Factory", function () {
  test("should create user from name and email params", () => {
    const expectedUser = new User(
      "123",
      "John",
      "john@test.com",
      "john@test.com",
    );

    const receivedUser = UserFactory.create({
      name: expectedUser.name,
      email: expectedUser.email,
    });

    expect(expectedUser.name).toEqual(receivedUser.name);
    expect(expectedUser.email).toEqual(receivedUser.email);
    expect(expectedUser.username).toEqual(receivedUser.username);
    expect(expectedUser.id).toBeDefined();
    expect(typeof expectedUser.id).toEqual("string");
  });
});
