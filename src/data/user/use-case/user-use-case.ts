import { User, UserRepository, UserUseCase } from "@/domain";

export class UserUseCaseImpl implements UserUseCase {
  constructor(private repository: UserRepository) {}

  create(user: User): Promise<void> {
    return this.repository.create(user);
  }

  update(user: User): Promise<void> {
    return this.repository.update(user);
  }

  delete(id: string): Promise<void> {
    return Promise.resolve();
  }

  find(id: string): Promise<User> {
    return this.repository.find(id);
  }
  findAll(): Promise<User[]> {
    return this.repository.findAll();
  }
}
