import express from 'express'
import { userRegister } from '../controllers/user.controller';
const router = express.Router()

router.post('/auth/register', userRegister)

export default router;