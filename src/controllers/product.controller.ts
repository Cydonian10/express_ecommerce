import { parseIntPipe } from "@/helpers/tranform.helper";
import { productService } from "@/services";
import { RequestHandler } from "express";

export const create: RequestHandler = async (req, res, next) => {
  const data = req.body;
  try {
    const products = await productService.create(data);

    res.json({
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

export const getAll: RequestHandler = async (_req, res, _next) => {
  const products = await productService.getAll();

  res.json({
    data: products,
  });
};

export const getOne: RequestHandler = async (req, res, next) => {
  const id = parseIntPipe(req.params.id);

  try {
    const product = await productService.getOne(id);

    res.json({
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const update: RequestHandler = async (req, res, next) => {
  const data = req.body;
  const id = parseIntPipe(req.params.id);
  console.log(data);
  try {
    const product = await productService.update(id, data);

    res.json({
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const remove: RequestHandler = async (req, res, next) => {
  const id = parseIntPipe(req.params.id);

  try {
    const idDelete = await productService.remove(id);

    res.json({
      data: idDelete,
    });
  } catch (error) {
    next(error);
  }
};
