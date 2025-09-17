import type { Request, Response } from "express";

export const getCommunity = (req:Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "All the community and members"
  })
}