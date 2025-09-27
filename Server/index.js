import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";   // ✅ fixed import
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./Config/Connectdb.js";
import userRouter from "./route/user.route.js";
import CategoryRouter from "./route/Category.route.js";
import productRouter from "./route/product.route.js";
import CartRouter from "./route/cart.router.js";
import mylistRouter from "./route/mylist.route.js";

const app = express();

app.use(cors());
app.options('/', cors());

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet({
    crossOriginResourcePolicy: false
}));

app.get('/', (request, response) => {
    response.json({
        message: "server is running " + process.env.PORT
    });
});

app.use('/api/user',userRouter);
app.use('/api/category',CategoryRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',CartRouter);
app.use('/api/mylist',mylistRouter);


connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server is running on port", process.env.PORT);
    });
});
