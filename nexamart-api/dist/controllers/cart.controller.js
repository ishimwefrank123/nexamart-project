"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCartItem = void 0;
const getCartItem = (req, res) => {
    res.status(200).json({
        success: true,
        message: "get the item from cart"
    });
};
exports.getCartItem = getCartItem;
