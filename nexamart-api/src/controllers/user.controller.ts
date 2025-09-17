import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
export const userRegister = async(req: Request, res: Response) => {
 const {id,name,email,password,role,profileImage} = req.body
 try {

  //validate the role
  if(!["buyer","seller"].includes(role)){
   return res.status(500).json({error: "Invalid Role"})
  }

  //check if user already existing
  const existingUser = await prisma.user.findUnique({
    where: {email}
  });

  if(existingUser){
    return res.status(500).json({
      success: false,
      message: "User Already exist",
    })
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
      role,
      profileImage
    }
  })

  res.status(400).json({
    success: true,
    message: user
  })

 }catch(error: any){
  console.log("Error during creating user", error)
  res.status(500).json({message: error.message});
 }
}