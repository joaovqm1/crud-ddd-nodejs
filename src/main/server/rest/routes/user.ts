import { Request } from "@hapi/hapi";

export function createUser(request: Request): string {
  console.log("Processing request", request.info.id);
  return "Hello! Nice to have met you.";
}
