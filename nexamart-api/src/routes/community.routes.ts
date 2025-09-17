import express from 'express'
import { getCommunity } from '../controllers/community.controller'

const router = express.Router()

router.get('/community', getCommunity)

export default router