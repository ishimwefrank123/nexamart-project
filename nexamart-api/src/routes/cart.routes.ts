import express from 'express'
import { getCartItem } from '../controllers/cart.controller'

const router = express.Router()

router.get('/cartItem', getCartItem)

export default router