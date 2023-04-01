import { Application } from "express";
import { productRouter } from "@/routes/products.router";

export function apiRoutes(app: Application) {
  app.use("/products", productRouter);
}
