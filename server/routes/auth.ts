import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import verifyToken from "../utils/verifyToken";
import User from "../models/User";
import loginValidation from "./../utils/loginValidation";
import registerValidation from "./../utils/registerValidation";
const authRouter = Router();

authRouter.get("/isLoggedIn", verifyToken, async (req, res) => {
  const decoded: any = jwt.decode(req.header("authToken"));
  const user: any = await User.findOne({ _id: decoded._id }, { role: 1 });
  res.send(user.role);
});

authRouter.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const treatedUsername = req.body.username.toLowerCase().replace(/\s/g, "");

  const usernameExists = await User.findOne({ username: treatedUsername });
  if (usernameExists) return res.status(400).send("USERNAME ALREADY IN USE");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    username: treatedUsername,
    password: hashedPassword,
  });

  try {
    await user.save();
    res.send("Success");
  } catch (err) {
    res.status(400).send(err);
  }
});
/* @ts-ignore */

authRouter.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user: any = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Username doesnt exist");

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  const token = jwt.sign(
    { _id: user._id, username: user.username },
    process.env.JWT_TOKEN
  );
  res.header("authToken", token).send();
});

authRouter.post("/logout", (req, res) => {
  res.send(false);
});

export default authRouter;
