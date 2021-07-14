import { Router } from "express";
import verifyToken from "../../utils/verifyToken";
import Service from "../../models/admin/Service";

const serviceRouter = Router();

serviceRouter.get("/", verifyToken, async (req, res) => {
  const services = await Service.find({}, {});
  console.log(services);
  res.send(services);
});

serviceRouter.post("/getData", verifyToken, async (req, res) => {
  const services = await Service.findOne({ _id: req.body.id }, {});
  console.log(services);
  res.send(services);
});

serviceRouter.post("/new", verifyToken, async (req, res) => {
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

serviceRouter.post("/edit", verifyToken, async (req, res) => {
  const filter = { _id: req.body._id };
  const editService = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    extras: req.body.extras,
  };

  try {
    const doc = await Service.findOneAndUpdate(filter, editService);
    res.send("Success");
  } catch (err) {
    res.status(400).send(err);
  }
});

export default serviceRouter;
