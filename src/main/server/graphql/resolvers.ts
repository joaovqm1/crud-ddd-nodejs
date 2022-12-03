import { createUser, getUser, getUsers } from "@/main/controller";
export const Resolvers = {
  Query: {
    getAllUsers: getUsers,
    getUser: (_: any, args: any) => getUser(args.id),
  },
  Mutation: {
    addUser: (_: any, args: any) => {
      return createUser({
        name: args.name,
        email: args.email,
        username: args.username,
      });
    },
  },
};
