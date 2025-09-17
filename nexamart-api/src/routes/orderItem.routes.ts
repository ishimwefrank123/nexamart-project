import express from 'express'
import { getOrderItem } from '../controllers/orderItem.controller'

const router = express.Router()

router.get('/orderItem', getOrderItem)

export default router