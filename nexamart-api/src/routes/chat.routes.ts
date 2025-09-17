import express from 'express'
import { getChat } from '../controllers/chat.controller'

const router = express.Router()

router.get('/chat', getChat)

export default router