import jwt from 'jsonwebtoken'
import type { JwtPayload } from '../interfaces/jwt.interface';

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = "1h";

//Generate token 
export const generateToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN})
};

//verify token 
export const verifyToken = (token: string): JwtPayload | null => {
  try{
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  }catch {
    return null
  }
}