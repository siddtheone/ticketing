import { Publisher, TicketCreatedEvent, Subjects } from "@sdvqwe/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
