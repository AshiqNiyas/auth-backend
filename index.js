import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./Routes/userRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();
import mongoose from "mongoose";
// initialise express app
const app = express();
const PORT = process.env.PORT || 3001;
// attaching middlewares to express app
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/users", userRouter);
// configuring userRouter to perform all requests coming to /users route

// connecting to database and then starting the server
mongoose.connect(process.env.MONGO_URI).then(
  app.listen(PORT, () => {
    console.log(`app listening in port ${PORT}`);
  })
);
