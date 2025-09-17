import express from 'express'
import { getTransaction } from '../controllers/transaction.controller'

const router = express.Router()

router.get('/transation', getTransaction)

export default router