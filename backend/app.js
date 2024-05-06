import express from "express";
import cors from "cors";
import { connectDB } from "./DB/Database.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";
import path from "path";
import mongoose from "mongoose";

dotenv.config({ path: "./config/config.env" });
const app = express();

const port = process.env.PORT || 3000;

const connectDB = async (req, res) => {
  const db = "mongodb+srv://priyansh0401:projectlogin@login.rqsthm7.mongodb.net/?retryWrites=true&w=majority&appName=login";

  const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

  console.log(`MongoDB Connected to ${connection.host}`);

}

const allowedOrigins = [
  "https://main.d1sj7cd70hlter.amplifyapp.com",
  "https://expense-tracker-app-three-beryl.vercel.app",
  "https://www.moneyminds.tech/",
  "https://management-sage.vercel.app/",
  "https://management-sage.vercel.app",
  "https://www.moneyminds.tech"
  // add more origins as needed
];

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Router
app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
