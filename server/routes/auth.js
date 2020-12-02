const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const verifyToken = require("../utils/verifyToken");
const User = require("../models/User");
const {
  registerValidation,
  loginValidation,
} = require("./../utils/dataValidation");

router.get("/isLoggedIn", verifyToken, (req, res) => {
  res.send(true);
});

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const treatedUsername = req.body.username.toLowerCase().replace(/\s/g, "");

  //Check if email exists
  const usernameExists = await User.findOne({ username: treatedUsername });
  if (usernameExists) return res.status(400).send("USERNAME ALREADY IN USE");

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create a new user
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

router.post("/login", async (req, res) => {
  //LETS VALIDATE
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if email exists
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Username doesnt exist");

  //Password Check
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  //Assign Token to logged user
  const token = jwt.sign(
    { _id: user._id, username: user.username },
    process.env.JWT_TOKEN
  );
  res.header("authToken", token).send();
});

router.post("/logout", (req, res) => {
  res.send(false);
});

module.exports = router;
