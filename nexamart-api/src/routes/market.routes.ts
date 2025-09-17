import express from 'express'
import { getMarket } from '../controllers/market.controller'

const router = express.Router()

router.get('/market', getMarket)

export default router