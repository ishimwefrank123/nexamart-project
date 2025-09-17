"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderItem = void 0;
const getOrderItem = (req, res) => {
    res.status(200).json({
        success: true,
        message: "OrderItem"
    });
};
exports.getOrderItem = getOrderItem;
