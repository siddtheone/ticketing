import { PaymentCreatedEvent, Publisher, Subjects } from "@sdvqwe/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
