import { UserModel } from "@/data";
import { Sequelize } from "sequelize-typescript";

export async function setUpDatabase(): Promise<void> {
  const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
    sync: { force: true },
  });

  sequelize.addModels([UserModel]);
  await sequelize.sync();
}
