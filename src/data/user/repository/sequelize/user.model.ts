import {
  Table,
  Model,
  PrimaryKey,
  Column,
} from "sequelize-typescript";
@Table({
  tableName: "users",
})
class UserModel extends Model {
  @PrimaryKey
  @Column
  declare id: string;

  @Column({ allowNull: false })
  declare name: string;

  @Column({ allowNull: false })
  declare username: string;

  @Column({ allowNull: false })
  declare email: string;

  @Column({ allowNull: false })
  declare active: boolean;
}

export { UserModel };
