import { Publisher, Subjects, TicketCreatedEvent } from "@sdvqwe/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
