
import { PrismaClient, type Role } from '@prisma/client';
import type { TUser } from "../interfaces/user.interfaces"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

const createUser = async(name:string, email: string, password: string, role: Role, profileImage: string ) =>{
  const hashedPassword = await bcrypt.hash(password,10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      role,
      password: hashedPassword,
      profileImage
    }
  })
}

const emailExits = async(email: string) => {
  const user = await prisma.user.findUnique({
    where: {email}
  });

  return !!user;
}

export const userServices = {
  createUser,
  emailExits
}