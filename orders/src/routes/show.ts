import { NotAuthorizedError, NotFoundError, requireAuth } from "@sdvqwe/common";
import express, { Request, Response } from "express";
import { Order } from "../models/order";

const showOrderRouter = express.Router();

showOrderRouter.get(
  "/api/orders/:orderId",
  requireAuth,
  async (req: Request, res: Response) => {
    const order = await Order.findById(req.params.orderId).populate("ticket");

    if (!order) {
      throw new NotFoundError();
    }

    if (order.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    res.send(order);
  }
);

export { showOrderRouter };
