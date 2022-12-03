import { getUsers } from "@/main/controller";
export const Resolvers = {
  Query: {
    getAllUsers: getUsers,
  },
};
