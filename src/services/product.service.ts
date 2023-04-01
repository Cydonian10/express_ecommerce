import { PrismaClient } from "@prisma/client";

export class ProductService {
  constructor(private orm: PrismaClient) {}

  getAll() {
    return this.orm.product.findMany();
  }
}
