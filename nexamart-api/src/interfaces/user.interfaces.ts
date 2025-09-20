import type { Role } from "@prisma/client";

export type TUser = {
  _id: number,
  name: string,
  email: string,
  password: string,
  confirmPassword?: string,
  role: Role,
  profileImage: string
}

export interface IUserCreateDTO {
  name: string;
  email: string;
  password: string;
  role: Role;
  profileImage?: string | null;
}