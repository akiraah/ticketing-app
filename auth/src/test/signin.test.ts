import request from 'supertest'
import { app } from '../app'

it('should return a 201 upon signin', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: 'password123' })
    .expect(201)
  await request(app)
    .post('/api/users/signin')
    .send({ email: 'test@test.com', password: 'password123' })
    .expect(200)
})

it('should return a 400 with invalid a user.', async () => {
  return request(app)
    .post('/api/users/signin')
    .send({ email: 'userdoesnotexit@test.com', password: 'password123' })
    .expect(400)
})

// it('should return a 400 with invalid password', async () => {
//   return request(app)
//     .post('/api/users/signup')
//     .send({ email: 'test@test.com', password: '' })
//     .expect(400)
// })

// it('should prevent tbe entry of duplicate emails.', async () => {
//   await request(app)
//     .post('/api/users/signup')
//     .send({ email: 'test@test.com', password: 'password123' })
//     .expect(201)
//   await request(app)
//     .post('/api/users/signup')
//     .send({ email: 'test@test.com', password: 'password123' })
//     .expect(400)
// })
