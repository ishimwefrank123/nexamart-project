import express from 'express'
import { logout, userLogin, userRegister } from '../controllers/user.controller';
const router = express.Router()

//Register User
router.post('/auth/register', userRegister)

//Login User
router.post("/auth/login", userLogin)

//User logout
router.post('/auth/logout', logout)

export default router;