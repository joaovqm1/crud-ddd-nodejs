import { ApolloServer } from "apollo-server-express";
import { Schema } from "./schema";
import { Resolvers } from "./resolvers";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";

export async function startApolloServer(
  schema: any,
  resolvers: any,
): Promise<void> {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>(resolve =>
    httpServer.listen({ port: 4000 }, resolve),
  );
  console.log(
    `Server ready at http://localhost:4000${server.graphqlPath}`,
  );
}

export function startGraphQLServer(): Promise<void> {
  return startApolloServer(Schema, Resolvers);
}
