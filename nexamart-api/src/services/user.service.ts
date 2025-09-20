
import { PrismaClient, type Role,  User } from '@prisma/client';
import type { IUserCreateDTO, LoginResult, TUser } from "../interfaces/user.interfaces"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

const createUser = async(data: IUserCreateDTO): Promise<User> =>{
  const {name,email,password,role,profileImage} = data

  //hash password securely
  const hashedPassword = await bcrypt.hash(password,10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      role,
      password: hashedPassword,
      profileImage
    },
  });
  return user;
}

const emailExists = async(email: string): Promise<boolean> => {
  const user = await prisma.user.findUnique({
    where: {email}
  });
  return !!user;
}

const login = async (
  email: string,
  password: string
): Promise<LoginResult>  => {

  //find user by email
  const user = await prisma.user.findUnique({
    where: {email}
  })

  //Ckeck if user exists
  if(!user){
    return {
      success: false,
      message: "Invalid email or password"
    }
  }

  //check password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if(!isPasswordValid) {
    return {success: false,
      message: "Invalid email or password"
    }
  }
  
  //return user without password
  const {password: _, ...safeUser} = user

  return {
    success: true,
    message: "Login successful",
    user: safeUser
  }
}

export const userServices = {
  createUser,
  emailExists,
  login
}