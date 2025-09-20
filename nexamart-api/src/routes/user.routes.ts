import express from 'express'
import { userLogin, userRegister } from '../controllers/user.controller';
const router = express.Router()

//Register User
router.post('/auth/register', userRegister)

//Login User
router.post("/auth/login", userLogin)

export default router;