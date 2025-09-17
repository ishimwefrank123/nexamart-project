"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const order_routes_1 = __importDefault(require("./routes/order.routes"));
const orderItem_routes_1 = __importDefault(require("./routes/orderItem.routes"));
const cart_routes_1 = __importDefault(require("./routes/cart.routes"));
const transaction_route_1 = __importDefault(require("./routes/transaction.route"));
const chat_routes_1 = __importDefault(require("./routes/chat.routes"));
const market_routes_1 = __importDefault(require("./routes/market.routes"));
const community_routes_1 = __importDefault(require("./routes/community.routes"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = 5000;
app.use(express_1.default.json());
//Routes for User
//Register
app.use('/api/users', user_routes_1.default);
app.use('/api/products', product_routes_1.default);
app.use('/api/orders', order_routes_1.default);
app.use('/api/orderItems', orderItem_routes_1.default);
app.use('/api/cart', cart_routes_1.default);
app.use('/api/transactions', transaction_route_1.default);
app.use('/api/chats', chat_routes_1.default);
app.use('/api/markets', market_routes_1.default);
app.use('/api/communities', community_routes_1.default);
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`);
});
