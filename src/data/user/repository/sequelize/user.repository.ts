import { UserNotFound } from "@/commom";
import { User, UserRepositoryInterface } from "@/domain";
import { UserModel } from "./user.model";

export class UserRepository implements UserRepositoryInterface {
  async create(entity: User): Promise<void> {
    await UserModel.create({
      id: entity.id,
      name: entity.name,
      username: entity.username,
      email: entity.email,
      active: entity.isActive(),
    });
  }

  async update(entity: User): Promise<void> {
    await UserModel.update(
      {
        name: entity.name,
        username: entity.username,
        email: entity.email,
        active: entity.isActive(),
      },
      {
        where: {
          id: entity.id,
        },
      },
    );
  }

  async find(id: string): Promise<User> {
    let userModel;
    try {
      userModel = await UserModel.findOne({
        where: {
          id,
        },
        rejectOnEmpty: true,
      });
    } catch (error) {
      throw new UserNotFound(id);
    }

    return this.transformUserModelInUserEntity(userModel);
  }

  private transformUserModelInUserEntity(userModel: UserModel): User {
    return new User(
      userModel.id,
      userModel.name,
      userModel.username,
      userModel.email,
    );
  }

  async findAll(): Promise<User[]> {
    const userModel = await UserModel.findAll();

    const users = userModel.map(this.transformUserModelInUserEntity);
    return users;
  }
}
