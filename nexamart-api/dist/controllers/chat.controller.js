"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChat = void 0;
const getChat = (req, res) => {
    res.status(200).json({
        success: true,
        message: "All of the chat functionality"
    });
};
exports.getChat = getChat;
