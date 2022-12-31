import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects
} from '@arah2tickets/common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}
