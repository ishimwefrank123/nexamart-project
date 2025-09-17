import express from 'express'
import dotenv from 'dotenv'
import type { Request,Response } from 'express';


import userRoutes from './routes/user.routes'
import productRoutes from './routes/product.routes'
import orderRoutes from './routes/order.routes'
import orderItemRoutes from './routes/orderItem.routes'
import cartRoutes from './routes/cart.routes'
import transactionRoutes from './routes/transaction.route'
import chatRoutes from './routes/chat.routes'
import marketRoutes from './routes/market.routes'
import communityRoutes from './routes/community.routes'

const app = express()

dotenv.config()

const PORT = 5000;

app.use(express.json());

//Routes for User
//Register

app.use('/api/users', userRoutes)
app.use('/api/products',productRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/orderItems', orderItemRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/transactions', transactionRoutes)
app.use('/api/chats', chatRoutes)
app.use('/api/markets', marketRoutes)
app.use('/api/communities', communityRoutes)




app.get('/', (req:Request, res:Response)=>{
  res.send('Hello World')
})

app.listen(PORT,()=>{
console.log(`Server is listening on Port: ${PORT}`);
})