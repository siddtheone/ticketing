import { ExpirationCompleteEvent, Publisher, Subjects } from "@sdvqwe/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
