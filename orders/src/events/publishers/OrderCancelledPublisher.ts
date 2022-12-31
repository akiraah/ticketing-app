import { OrderCancelledEvent, Publisher, Subjects } from '@arah2tickets/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled
}
