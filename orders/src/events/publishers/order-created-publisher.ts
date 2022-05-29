import { OrderCreatedEvent, Publisher, Subjects } from "@sdvqwe/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
