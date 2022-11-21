/* eslint-disable max-nested-callbacks */
import { UserNotFound } from "@/commom";
import { User } from "@/domain";
import { Model, Sequelize } from "sequelize-typescript";
import { UserModel } from "./user.model";
import { UserSequelizeRepository } from "./user.repository";

describe("User repository test", () => {
  let sequelize: Sequelize;
  const userRepository = new UserSequelizeRepository();
  let user: User;

  beforeEach(async () => {
    user = new User("123", "John", "john", "john.test@test.com");

    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([UserModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize?.close();
  });

  function transformModelToJSONAndCleanIt(model: Model | null): any {
    const modelJSON = model?.toJSON();
    delete modelJSON.createdAt;
    delete modelJSON.updatedAt;

    return modelJSON;
  }

  it("should create a user", async () => {
    await userRepository.create(user);

    const userModel = await UserModel.findOne({
      where: { id: "123" },
    });

    expect(transformModelToJSONAndCleanIt(userModel)).toEqual({
      id: "123",
      name: user.name,
      username: user.username,
      email: user.email,
      active: user.isActive(),
    });
  });

  it("should update a user", async () => {
    await userRepository.create(user);

    user.changeName("John 2");
    await userRepository.update(user);
    const userModel = await UserModel.findOne({
      where: { id: "123" },
    });

    expect(transformModelToJSONAndCleanIt(userModel)).toEqual({
      id: "123",
      name: user.name,
      username: user.username,
      email: user.email,
      active: user.isActive(),
    });
  });

  it("should find a user", async () => {
    await userRepository.create(user);

    const userResult = await userRepository.find(user.id);

    expect(user).toEqual(userResult);
  });

  it("should throw an error when user is not found", async () => {
    expect(async () => {
      await userRepository.find("456ABC");
    }).rejects.toThrow(new UserNotFound("456ABC"));
  });

  it("should find all users", async () => {
    const user2 = new User(
      "1234",
      "John 2",
      "john2",
      "john2.test@test.com",
    );

    await userRepository.create(user);
    await userRepository.create(user2);

    const users = await userRepository.findAll();

    expect(users).toHaveLength(2);
    expect(users).toContainEqual(user);
    expect(users).toContainEqual(user2);
  });
});
