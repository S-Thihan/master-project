import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        let DB_CONNECT_STRING = ""

        //check if developement phase or production phase
        if (process.env.NODE_ENV === "development") {
            DB_CONNECT_STRING = process.env.MONGODB_LOCAL_URI!
        }
        if (process.env.NODE_ENV === "production") {
            DB_CONNECT_STRING = process.env.MONGODB_URI!
        }

        const response = await mongoose.connect(DB_CONNECT_STRING);
        console.log("Database connected.", response.connection.host);
    } catch (error) {
        console.log("DB connection error.", error)
        process.exit(1)
    }
}