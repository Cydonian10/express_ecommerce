import { productService } from "@/services";
import { RequestHandler } from "express";

export const getAll: RequestHandler = async (_req, res, _next) => {
  const products = await productService.getAll();

  res.json({
    data: products,
  });
};

export const getOne: RequestHandler = async (req, res, _next) => {
  const id = req.params.id;

  res.json({
    data: Number(id),
  });
};
