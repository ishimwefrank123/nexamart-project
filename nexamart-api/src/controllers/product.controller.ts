import type { Request, Response } from "express";
import { productServices } from "../services/product.service";


export const createProduct = async (req: Request, res: Response) => {
  const {name, description, price, stock_quantity, category} = req.body;
  const sellerId = parseInt(req.params.sellerId);
  try {

    //validate required fields
    if(!name || !description || !price || !stock_quantity || !category || !sellerId){
      return res.status(400).json({
        success: false,
        message: "Name, description, price, stock_quantity, category and sellerId are required "
      });
    }

    //Validate price is positive
    if(price <= 0){
      return res.status(400).json({
        success: false,
        message: "Price must be a positive number",
      })
    }

    //Validate stock quantity is non-negative 
    if(stock_quantity < 0){
      return res.status(400).json({
        success: false,
        message: "Stock quantity cannot be negative"
      })
    }

    const product = await productServices.createProduct(
      name, 
      description, 
      price, 
      stock_quantity, 
      category,
      sellerId
    )

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product
    })
  }catch(error: any){
    console.log("Error duing product creation", error);
    res.status(500).json({
      message: "Internal server error"
    });
  }
}