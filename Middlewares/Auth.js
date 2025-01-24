import jwt from "jsonwebtoken";
import userModel from "../Models/userModel.js";
export const authenticateUser = async (req, res, next) => {
  const token = req.cookies.token;
  // checking whether logged in using the presence of token
  if (!token) {
    return res.json({ error: "Not authenticated" });
  }
  // checking whether the token is valid
  const verified = jwt.verify(token, process.env.SECRET);
  if (!verified) {
    return res.json({ error: "Invalid token" });
  }
  // getting user details from the database
  const user = await userModel.findById(verified.userId);
  if (user) {
    user.password = undefined;
    req.user = user;
    return next();
  }
  res.json({ error: "User not found" });
};

export const authorizeUser = async (req, res, next) => {
  // checking whether the user is admin or not
  if (!req.user.isAdmin) {
    return res.json({ error: "Not authorized" });
  }
  return next();
};
