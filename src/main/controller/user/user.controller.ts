import { getUserUseCase } from "../../factories";
import { CreateUser, User, UserFactory } from "@/domain";

export async function createUser(dto: CreateUser): Promise<User> {
  const useCase = getUserUseCase();

  const user = UserFactory.create(dto);

  await useCase.create(user);

  return user;
}

export async function getUser(id: string): Promise<User> {
  const useCase = getUserUseCase();

  const user = await useCase.find(id);

  return user;
}

export async function getUsers(): Promise<User[]> {
  const useCase = getUserUseCase();

  const users = await useCase.findAll();

  return users;
}
