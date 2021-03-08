const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const verifyToken = require("../../utils/verifyToken");
const User = require("../../models/User");

router.get("/getClients", verifyToken, async (req, res) => {
  const decoded = jwt.decode(req.header("authToken"));
  const users = await User.find({}, { username: 1 });
  console.log(users);
  res.send(users);
});

module.exports = router;
