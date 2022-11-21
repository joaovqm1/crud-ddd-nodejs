import { User } from "../entity";

export interface UserUseCase {
  create(user: User): Promise<void>;
  update(user: User): Promise<void>;
  delete(id: string): Promise<void>;
  find(id: string): Promise<User>;
  findAll(): Promise<User[]>;
}
