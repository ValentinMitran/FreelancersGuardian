import { Router } from "express";
import jwt from "jsonwebtoken";
import verifyToken from "../utils/verifyToken";
import User from "../models/User";

const walletRouter = Router();

walletRouter.post("/topup", verifyToken, async (req, res) => {
  const topUp = req.body.amount * 100;
  const stripe = require("stripe")(process.env.STRIPE_SEC_KEY);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: topUp,
    currency: "eur",
  });
  res.send({
    publishableKey: process.env.STRIPE_PUB_KEY,
    clientSecret: paymentIntent.client_secret,
  });
});

walletRouter.post("/topup/success", verifyToken, async (req: any, res: any) => {
  const decoded: any = jwt.decode(req.header("authToken"));
  const topUp = req.body.amount * 100;
  await User.updateOne(
    { username: decoded.username },
    { $inc: { balance: topUp } }
  );
  res.status(204).send();
});

walletRouter.get("/balance", verifyToken, async (req: any, res: any) => {
  const decoded: any = jwt.decode(req.header("authToken"));
  const data = await User.findOne(
    { username: decoded.username },
    { _id: 1, username: 1, balance: 1 }
  );
  res.send(data);
});

export default walletRouter;
