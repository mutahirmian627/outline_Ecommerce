import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // MongoDB connection URI
        const mongoURI = process.env.MONGODB_URI;

        // Connect to the database
        await mongoose.connect(mongoURI, {
            dbName: "e-commerce", // Specify the database name
        });

        mongoose.connection.on("connected", () => {
            console.log("DB connected");
        });

    } catch (error) {
        console.error("DB connection error:", error.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
