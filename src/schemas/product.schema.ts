import { z } from "zod";

const id = z.string().transform((val, ctx) => {
  const value = Number(val);
  if (isNaN(value)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Is not a number",
      fatal: true,
    });
    return z.NEVER;
  }
  return value;
});

const name = z.string().min(2);
const image = z.string().min(2);
const price = z.number();
const stock = z.number().int();

export const CreateProducDto = z.object({
  body: z.object({
    name,
    image,
    price,
    stock,
  }),
});

export const ParamsIdNumber = z.object({
  params: z.object({
    id,
  }),
});
