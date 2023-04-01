import { Router } from "express";

import { getAll, getOne } from "@/controllers/product.controller";
import { validatorHandler } from "@/middlewares/validator.handler";
import { ParamsIdNumber } from "@/schemas/product.schema";

export const productRouter = Router();

productRouter.get("/all", getAll);
productRouter.get("/:id", [validatorHandler(ParamsIdNumber)], getOne);
