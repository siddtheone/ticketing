import { Publisher, Subjects, TicketUpdatedEvent } from "@sdvqwe/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
