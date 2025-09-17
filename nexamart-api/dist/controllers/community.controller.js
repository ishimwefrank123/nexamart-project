"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommunity = void 0;
const getCommunity = (req, res) => {
    res.status(200).json({
        success: true,
        message: "All the community and members"
    });
};
exports.getCommunity = getCommunity;
