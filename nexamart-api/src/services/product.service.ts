
import { PrismaClient, Market } from "@prisma/client";


const prisma = new PrismaClient()

const createProduct = async(
  name: string, 
  description: string, 
  price:number, 
  stock_quantity: number, 
  category: Market, 
  sellerId: number
) => {
  const product = await prisma.product.create({
    data:{
      name,
      description,
      price,
      stock_quantity,
      category,
      sellerId
    }
  })
} 

export const productServices = {
  createProduct
}