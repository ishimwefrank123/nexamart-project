import type { Role, User } from "@prisma/client";

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

export interface LoginResult {
  success: boolean;
  message: string;
  token?: string;
  user?: Partial<User>
}