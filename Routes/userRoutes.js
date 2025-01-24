import express from "express";
import { authenticateUser, authorizeUser } from "../Middlewares/Auth.js";

import {
  registerUser,
  loginUser,
  getUsers,
} from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/all", authenticateUser, authorizeUser, getUsers);

export default userRouter;
