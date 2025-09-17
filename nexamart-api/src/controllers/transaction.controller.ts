import type { Request, Response } from "express";

export const getTransaction = (req: Request, res:Response) => {
  res.status(400).json({
    success: true,
    message: "All the transaction carried out at the market"
  })
}