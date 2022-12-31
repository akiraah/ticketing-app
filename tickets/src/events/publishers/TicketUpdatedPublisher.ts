import { Publisher, Subjects, TicketUpdatedEvent } from '@arah2tickets/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated
}
