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
exports.userRoutes = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// Create user
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, role } = req.body;
        console.log("Received data:", { name, email, password, role });
        // Validate the role
        if (!["buyer", "seller"].includes(role)) {
            return res.status(400).json({ error: "Invalid role" });
        }
        const user = yield prisma.user.create({
            data: {
                name,
                email,
                password, // ⚠️ later we will hash this with bcrypt
                role, // Use role directly as a string
            },
        });
        res.status(201).json(user);
        const users = yield prisma.user.findMany();
        console.log("Existing users:", users);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}));
// Get all users
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany();
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}));
exports.userRoutes = router;
