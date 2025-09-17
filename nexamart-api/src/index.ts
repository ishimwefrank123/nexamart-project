import express from 'express'
import dotenv from 'dotenv'
import type { Request,Response } from 'express';
import userRoutes from './routes/user.routes'
import productRoutes from './routes/product.routes'
const app = express()

dotenv.config()

const PORT = 5000;

app.use(express.json());

//Routes for User
//Register

app.use('/api/users', userRoutes)
app.use('/api/products',productRoutes)


app.get('/', (req:Request, res:Response)=>{
  res.send('Hello World')
})

app.listen(PORT,()=>{
console.log(`Server is listening on Port: ${PORT}`);
})