import type { Request, Response } from "express";

export const getCartItem = (req:Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "get the item from cart"
  })
}