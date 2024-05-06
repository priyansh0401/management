import mongoose from "mongoose";

export const connectDB = async (req, res) => {
  const db ="mongodb+srv://priyansh0401:projectmoney@cluster0.3hh7swg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0mongodb+srv://priyansh0401:<password>@cluster0.3hh7swg.mongodb.net/test";
  const { connection } = await mongoose.connect(db, { useNewUrlParser: true });

  console.log(`MongoDB Connected to ${connection.host}`);
};
// module.exports = connectDB;
