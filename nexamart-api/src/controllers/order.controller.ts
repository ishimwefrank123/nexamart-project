import type { Request, Response } from "express";

export const placeOrder = async(req: Request, res:Response) =>{
try{
res.status(200).json({
  success: true,
  message: "Order route"
})
}catch(err: any){
  console.log("internal server error:",err);
  res.status(400).json({
    message: "Internal server error",
    err
  })
}
}