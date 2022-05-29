import { OrderCancelledEvent, Publisher, Subjects } from "@sdvqwe/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
