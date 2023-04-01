import { notFound } from "@hapi/boom";
import type { PrismaClient, Product } from "@prisma/client";

export class ProductService {
  constructor(private orm: PrismaClient) {}

  async create(data: Omit<Product, "id">) {
    const newProduct = await this.orm.product.create({
      data,
    });

    return newProduct;
  }

  getAll() {
    return this.orm.product.findMany();
  }

  async getOne(id: Product["id"]) {
    const product = await this.orm.product.findUnique({ where: { id } });

    if (!product) throw notFound("Product not found");

    return product;
  }

  async update(id: Product["id"], changes: Partial<Product>) {
    await this.findExistingProduct(id);

    const updateProduct = await this.orm.product.update({
      where: { id },
      data: changes,
    });

    return updateProduct;
  }

  async remove(id: Product["id"]) {
    const removeProduct = await this.orm.product.delete({ where: { id } });

    return removeProduct.id;
  }

  async findExistingProduct(id: Product["id"]) {
    const product = await this.orm.product.findUnique({ where: { id } });

    if (!product) throw notFound("Product not found");

    return product;
  }
}
