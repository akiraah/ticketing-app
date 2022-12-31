import { OrderCreatedEvent, Publisher, Subjects } from '@arah2tickets/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated
}
