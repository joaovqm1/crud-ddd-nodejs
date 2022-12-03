import { gql } from "apollo-server-express";
export const Schema = gql`
  type User {
    id: ID!
    name: String!
    username: String
    email: String!
    active: Boolean
  }

  type Query {
    getAllUsers: [User]
    getUser(id: String): User
  }
`;
