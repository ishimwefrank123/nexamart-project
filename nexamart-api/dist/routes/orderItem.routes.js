"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderItem_controller_1 = require("../controllers/orderItem.controller");
const router = express_1.default.Router();
router.get('/orderItem', orderItem_controller_1.getOrderItem);
exports.default = router;
