import express from 'express'
import { placeOrder } from '../controllers/order.controller'

const router = express.Router()

router.get('/placeOrder', placeOrder)

export default router