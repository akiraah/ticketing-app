import request from 'supertest'
import { app } from '../app'

it('should return a 201 upon signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: 'password123' })
    .expect(201)
})

it('should return a 400 with invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({ email: 'notavalidemail', password: '123!asd' })
    .expect(400)
})

it('should return a 400 with invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: '' })
    .expect(400)
})

it('should prevent tbe entry of duplicate emails.', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: 'password123' })
    .expect(201)
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: 'password123' })
    .expect(400)
})


