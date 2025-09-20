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
exports.userRegister = void 0;
const client_1 = require("@prisma/client");
const user_service_1 = require("../services/user.service");
const prisma = new client_1.PrismaClient();
const userRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, confirmPassword, role, profileImage } = req.body;
    try {
        //validate the role
        if (!["buyer", "seller"].includes(role)) {
            return res.status(500).json({ error: "Invalid Role" });
        }
        //check if user already existing
        const existingUser = yield user_service_1.userServices.emailExists(email);
        if (existingUser) {
            return res.status(500).json({
                success: false,
                message: "User Already exist",
            });
        }
        //check if password is the similar
        if (password !== confirmPassword) {
            return res.status(500).json({
                success: false,
                message: "Password and confirmation password do not match "
            });
        }
        const user = yield user_service_1.userServices.createUser({
            name,
            email,
            password,
            role,
            profileImage
        });
        res.status(200).json({
            success: true,
            message: "User registration successfully",
            user
        });
    }
    catch (error) {
        console.log("Error during creating user", error);
        res.status(500).json({ message: error.message });
    }
});
exports.userRegister = userRegister;
