import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const MONGODB_URL = "mongodb+srv://priyansh0401:projectlogin@login.rqsthm7.mongodb.net/?retryWrites=true&w=majority&appName=login";
    if (!MONGODB_URL) {
      throw new Error("DB_URI environment variable is not set");
    }
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to database");
  } catch (err) {
    console.error("Error connecting to database:", err);
    throw err;
  }
};

export { connectDB };