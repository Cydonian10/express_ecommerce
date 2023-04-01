import { NextFunction, Request, Response } from "express";

export function logHandler(
  err: TypeError,
  _req: Request,
  _res: Response,
  next: NextFunction
) {
  console.error(err);
  next(err);
}

export function errorHandler(
  err: TypeError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

export function boomErrorHandler(
  err: any,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}
