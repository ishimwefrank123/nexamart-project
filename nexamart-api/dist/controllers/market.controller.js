"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarket = void 0;
const getMarket = (req, res) => {
    res.status(200).json({
        success: true,
        message: "All markets and the category of the products"
    });
};
exports.getMarket = getMarket;
