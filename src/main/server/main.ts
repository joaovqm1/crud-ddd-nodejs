import dotenv from "dotenv";
import { setUpDatabase } from "../factories";
import { startGraphQLServer } from "./graphql";
import { startRestServer } from "./rest";

async function main(): Promise<void> {
  await setUpDatabase();

  dotenv.config();

  if (shouldExecuteGraphQLServer()) {
    startGraphQLServer();
  } else {
    startRestServer();
  }
}

function shouldExecuteGraphQLServer(): boolean {
  return process.env.SERVER_TYPE?.toUpperCase() === "GRAPHQL";
}

main();
