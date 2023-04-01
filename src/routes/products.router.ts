import { Router } from "express";

import {
  create,
  getAll,
  getOne,
  remove,
  update,
} from "@/controllers/product.controller";
import { validatorHandler } from "@/middlewares/validator.handler";
import {
  CreateProducDto,
  ParamsIdNumber,
  UpdateProducDto,
} from "@/schemas/product.schema";

export const productRouter = Router();

productRouter.get("/all", getAll);
productRouter.post("/save", [validatorHandler(CreateProducDto)], create);
productRouter.get("/:id", [validatorHandler(ParamsIdNumber)], getOne);
productRouter.put("/:id", [validatorHandler(UpdateProducDto)], update);
productRouter.delete("/:id", [validatorHandler(ParamsIdNumber)], remove);
