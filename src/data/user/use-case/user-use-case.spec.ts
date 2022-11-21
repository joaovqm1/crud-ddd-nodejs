import { UserFactory, UserRepository } from "@/domain";
import { UserUseCaseImpl } from "./user-use-case";

describe("User Use Case Impl", function () {
  const repository: UserRepository = {
    create: jest.fn(),
    find: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
  };
  const useCase = new UserUseCaseImpl(repository);

  test("should call repository to create an user", async () => {
    const createFunctionSpy = jest.spyOn(repository, "create");
    const user = UserFactory.create({
      name: "John",
      email: "john@test.com",
    });

    await useCase.create(user);

    expect(createFunctionSpy.mock.calls[0][0]).toEqual(user);
  });

  test("should call repository to update an user", async () => {
    const updateFunctionSpy = jest.spyOn(repository, "update");
    const user = UserFactory.create({
      name: "John",
      email: "john@test.com",
    });

    await useCase.update(user);

    expect(updateFunctionSpy.mock.calls[0][0]).toEqual(user);
  });

  test("should call repository to find an user", async () => {
    const expectedUser = UserFactory.create({
      name: "John",
      email: "john@test.com",
    });
    const id = expectedUser.id;
    const findFunctionSpy = jest.spyOn(repository, "find");
    findFunctionSpy.mockResolvedValue(expectedUser);

    const receivedUser = await useCase.find(id);

    expect(findFunctionSpy.mock.calls[0][0]).toEqual(id);
    expect(receivedUser).toEqual(expectedUser);
  });

  test("should call repository to find all users", async () => {
    const expectedUsers = [
      UserFactory.create({
        name: "John",
        email: "john@test.com",
      }),
    ];
    const findFunctionSpy = jest.spyOn(repository, "findAll");
    findFunctionSpy.mockResolvedValue(expectedUsers);

    const receivedUsers = await useCase.findAll();

    expect(findFunctionSpy).toHaveBeenCalled();
    expect(receivedUsers).toEqual(expectedUsers);
  });
});
