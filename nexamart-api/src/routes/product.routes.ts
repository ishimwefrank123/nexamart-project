import express from 'express'
import { createProduct } from '../controllers/product.controller'
const router = express.Router()

router.post('/registerProduct/:sellerId', createProduct)

export  default router