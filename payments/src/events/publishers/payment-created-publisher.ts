import { PaymentCreatedEvent, Publisher, Subjects } from '@arah2tickets/common'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated
}
