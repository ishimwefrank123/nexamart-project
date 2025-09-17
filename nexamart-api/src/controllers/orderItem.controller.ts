import type { Request, Response } from "express";

export const getOrderItem = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "OrderItem"
  })
}