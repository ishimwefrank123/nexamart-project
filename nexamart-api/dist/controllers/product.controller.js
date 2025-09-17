"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const product_service_1 = require("../services/product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, stock_quantity, category } = req.body;
    const sellerId = parseInt(req.params.sellerId);
    try {
        //validate required fields
        if (!name || !description || !price || !stock_quantity || !category || !sellerId) {
            return res.status(400).json({
                success: false,
                message: "Name, description, price, stock_quantity, category and sellerId are required "
            });
        }
        //Validate price is positive
        if (price <= 0) {
            return res.status(400).json({
                success: false,
                message: "Price must be a positive number",
            });
        }
        //Validate stock quantity is non-negative 
        if (stock_quantity < 0) {
            return res.status(400).json({
                success: false,
                message: "Stock quantity cannot be negative"
            });
        }
        const product = yield product_service_1.productServices.createProduct(name, description, price, stock_quantity, category, sellerId);
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product
        });
    }
    catch (error) {
        console.log("Error duing product creation", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
});
exports.createProduct = createProduct;
