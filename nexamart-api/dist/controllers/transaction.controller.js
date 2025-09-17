"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransaction = void 0;
const getTransaction = (req, res) => {
    res.status(400).json({
        success: true,
        message: "All the transaction carried out at the market"
    });
};
exports.getTransaction = getTransaction;
