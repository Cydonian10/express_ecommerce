import { PrismaClient } from "@prisma/client";

import { ProductService } from "./product.service";

const prisma = new PrismaClient();

export const productService = new ProductService(prisma);
