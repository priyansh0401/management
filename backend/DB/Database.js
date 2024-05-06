import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = "mongodb+srv://priyansh0401:projectlogin@login.rqsthm7.mongodb.net/?retryWrites=true&w=majority&appName=login";

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}