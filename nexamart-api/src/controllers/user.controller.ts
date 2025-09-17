import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'
import { userServices } from "../services/user.service";


const prisma = new PrismaClient()
export const userRegister = async(req: Request, res: Response) => {
 const {id,name,email,password,confirmPassword,role,profileImage} = req.body
 try {

  //validate the role
  if(!["buyer","seller"].includes(role)){
   return res.status(500).json({error: "Invalid Role"})
  }

  //check if user already existing
  const existingUser = await userServices.emailExits(email)

  if(existingUser){
    return res.status(500).json({
      success: false,
      message: "User Already exist",
    })
  }

  //check if password is the similar
  if(password !== confirmPassword){
    return res.status(500).json({
      success: false,
      message: "Password and confirmation password do not match "
    })
  } 
    const user = await userServices.createUser(name,email,password,role,profileImage)

    res.status(200).json({
    success: true,
    message: "User registration successfully", 
    user
  })

  


 }catch(error: any){
  console.log("Error during creating user", error)
  res.status(500).json({message: error.message});
 }
}