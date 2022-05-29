import { requireAuth } from "@sdvqwe/common";
import express, { Request, Response } from "express";
import { Order } from "../models/order";

const indexOrderRouter = express.Router();

indexOrderRouter.get(
  "/api/orders",
  requireAuth,
  async (req: Request, res: Response) => {
    const orders = await Order.find({ userId: req.currentUser!.id }).populate(
      "ticket"
    );

    res.send(orders);
  }
);

export { indexOrderRouter };
