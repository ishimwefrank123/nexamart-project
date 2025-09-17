import type { Request, Response } from "express";

export const getMarket = (req: Request, res: Response) => {
res.status(200).json({
  success: true,
  message: "All markets and the category of the products"
})
}