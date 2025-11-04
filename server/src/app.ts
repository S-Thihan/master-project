import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/dbConnect";
import userRoutes from "./routes/user";
import productRoutes from "./routes/product";
import errorHandler from "./middlewares/errorHandler";

//dotenv config
dotenv.config({
    path: ".env"
})

//Express Start
const app = express();

//add CORS
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}))

//use json and cookieparser()
app.use(json());
app.use(cookieParser());

//register api routes in app.ts
app.use("/api", userRoutes)
app.use("/api", productRoutes)



//add errorHandlers
app.use(errorHandler)

//routes

const PORT = process.env.PORT || "8000"

app.listen(PORT, () => {
    //db connection
    connectDB();

    console.log("Server is running on ", PORT)
})