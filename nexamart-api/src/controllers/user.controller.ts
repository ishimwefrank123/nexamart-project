import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'
import { userServices } from "../services/user.service";
import type { TUser } from "../interfaces/user.interfaces";


const prisma = new PrismaClient()
export const userRegister = async(req: Request<{},{},TUser>, res: Response) => {
 const {name,email,password,confirmPassword,role,profileImage} = req.body
 try {

  //validate the role
  if(!["buyer","seller"].includes(role)){
   return res.status(500).json({error: "Invalid Role"})
  }

  //check if user already existing
  const existingUser = await userServices.emailExists(email);

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
    const user = await userServices.createUser({
      name,
      email,
      password,
      role,
      profileImage
    });

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

export const userLogin = async(req: Request, res: Response) => {
  const {email, password} = req.body;
  try {
    const result = await userServices.login(email, password);

    if(!result.success){
      return res.status(400).json(result);
    }

    res.status(200).json(result)
    

  }catch(err: unknown) {
    if(err instanceof Error) {
      console.error("Login error:", err.message);
      return res.status(500).json({
        message: err.message
      });
    }
    return res.status(500).json({
      message: "Unknown error"
    })
  }
}