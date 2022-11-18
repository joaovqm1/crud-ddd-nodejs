/* eslint-disable max-nested-callbacks */
import {
  InvalidUseId,
  InvalidUserEmail,
  InvalidUserName,
  InvalidUserUsername,
} from "@/commom";
import { User } from "./user-entity";

describe("User Entity", () => {
  function createUser(): User {
    return new User("123", "John", "john", "john@test.com");
  }

  it("should throw error when id is empty", () => {
    expect(() => {
      new User("", "John", "john", "john@test.com");
    }).toThrow(new InvalidUseId());
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new User("123", "", "john", "john@test.com");
    }).toThrow(new InvalidUserName());
  });

  it("should throw error when username is empty", () => {
    expect(() => {
      new User("123", "John", "", "john@test.com");
    }).toThrow(new InvalidUserUsername());
  });

  it("should throw error when email is empty", () => {
    expect(() => {
      new User("123", "John", "john", "");
    }).toThrow(new InvalidUserEmail());
  });

  it("should change name", () => {
    const user = createUser();

    user.changeName("Jane");

    expect(user.name).toBe("Jane");
  });

  it("should activate user", () => {
    const user = createUser();

    user.activate();

    expect(user.isActive()).toBe(true);
  });

  it("should deactivate user", () => {
    const user = createUser();

    user.deactivate();

    expect(user.isActive()).toBe(false);
  });
});
