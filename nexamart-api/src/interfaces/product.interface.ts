export type CreateProductData = {
  name: string,
  description: string,
  price: number,
  stock_quantity: number,
  category: string,
  sellerId: number,
}

export type UpdateProductData = {
  name?: string,
  description?: string,
  price?: number,
  stock_quantity?: number,
  category?: string
}