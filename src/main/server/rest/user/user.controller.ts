import { getUserUseCase } from "../../../factories";
import { Request } from "@hapi/hapi";
import { CreateUser, User, UserFactory } from "@/domain";

export async function createUser(request: Request): Promise<string> {
  const useCase = getUserUseCase();

  const user = UserFactory.create(request.payload as CreateUser);

  await useCase.create(user);

  return "User created succefully";
}

export async function getUsers(): Promise<User[]> {
  const useCase = getUserUseCase();

  const users = await useCase.findAll();

  return users;
}
