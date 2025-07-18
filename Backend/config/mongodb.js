import { log } from "console";
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => console.log("MongoDB connection successful..."));
        await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
        console.log("MongoDB connected...");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

export default connectDB;