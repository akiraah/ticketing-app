import { Publisher, Subjects, TicketCreatedEvent } from '@arah2tickets/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
