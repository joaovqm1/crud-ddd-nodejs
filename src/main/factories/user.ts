import { UserSequelizeRepository, UserUseCaseImpl } from "@/data";
import { UserUseCase } from "@/domain";

export function getUserUseCase(): UserUseCase {
  const repository = new UserSequelizeRepository();

  const useCase = new UserUseCaseImpl(repository);
  return useCase;
}
