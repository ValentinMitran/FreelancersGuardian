const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const verifyToken = require("../../utils/verifyToken");
const Service = require("../../models/admin/Service");

router.get("/", verifyToken, async (req, res) => {
  const services = await Service.find({}, {});
  console.log(services);
  res.send(services);
});

router.post("/new", verifyToken, async (req, res) => {
  const newService = new Service({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    extras: req.body.extras,
  });

  try {
    await newService.save();
    res.send("Success");
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
