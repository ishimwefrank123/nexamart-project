
import { PrismaClient, type Role, type User } from '@prisma/client';
import type { IUserCreateDTO, TUser } from "../interfaces/user.interfaces"
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

export const userServices = {
  createUser,
  emailExists
}