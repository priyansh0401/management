import mongoose from "mongoose";

export const connectDB = async () => {
  const db = process.env.MONGO_URL;

  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log(`MongoDB Connected`);
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err}`);
  }
}