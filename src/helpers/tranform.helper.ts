import { badRequest } from "@hapi/boom";

export function parseIntPipe(val: string) {
  const value = parseInt(val, 10);

  if (isNaN(value)) {
    throw badRequest("Is not a number");
  }

  return value;
}
