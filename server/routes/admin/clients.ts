import { Router } from "express";
import jwt from "jsonwebtoken";
import verifyToken from "../../utils/verifyToken";
import User from "../../models/User";

const clientsRouter = Router();

clientsRouter.get("/getClients", verifyToken, async (req, res) => {
  const decoded = jwt.decode(req.header("authToken"));
  const users = await User.find({}, { username: 1 });
  console.log(users);
  res.send(users);
});

export default clientsRouter;
