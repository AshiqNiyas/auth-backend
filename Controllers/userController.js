import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  // getting user info from the request body
  const { username, email, password } = req.body;
  // checking whether all fields are present
  if (!username || !email || !password) {
    return res.send("Empty body");
  }

  const userwithemail = await userModel.findOne({ email });
  // checking if email is already taken
  if (userwithemail) {
    return res.json({ message: "email is already in use" });
  }
  const userwithusername = await userModel.findOne({ username });
  // checking if username is already taken
  if (userwithusername) {
    return res.json({ message: "username already taken" });
  }

  const hashedPass = await bcrypt.hash(password, 10);
  // hashing the password before saving
  const newUser = await userModel.create({
    username,
    email,
    password: hashedPass,
  });

  // saving the new user in database
  await newUser.save();

  res.json({ message: "user created" });
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({ error: "Fill all the fields" });
  }
  const user = await userModel.findOne({ username });
  if (!user) {
    return res.json({ error: "User not found" });
  }

  const verified = await bcrypt.compare(password, user.password);

  if (!verified) {
    return res.json({ error: "invalid credentials" });
  }
  const token = jwt.sign({ userId: user._id }, process.env.SECRET);
  res.cookie("token", token, { withCredentials: true, httpOnly: true });
  res.json({
    success: "User logged in",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    },
  });
};

export const getUsers = async (req, res) => {
  const users = await userModel.find({});
  res.json(users);
};
