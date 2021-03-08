const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const verifyToken = require("../../utils/verifyToken");
const User = require("../../models/User");

router.get("/getClients", verifyToken, async (req, res) => {
  const decoded = jwt.decode(req.header("authToken"));
  const user = await User.findOne({ _id: decoded._id }, { role: 1 });
  res.send(user.role);
});

module.exports = router;
