import type { Request, Response } from "express";

export const getChat = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "All of the chat functionality"
  })
}