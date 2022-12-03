import { UserModel } from "@/data";
import { Sequelize } from "sequelize-typescript";

export async function setUpDatabase(): Promise<void> {
  const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
  });

  sequelize.addModels([UserModel]);
  await sequelize.sync();
}
