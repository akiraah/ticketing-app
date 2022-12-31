import mongoose from 'mongoose'
import { app } from './app'

const start = async () => {
  if (!process.env.JWT_KEY) throw new Error('No JWT key provided.')
  if (!process.env.MONGO_URI) throw new Error('No Mongo URI provided.')

  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to Mongo DB')
  } catch (e) {
    console.error(e)
  }
  app.listen(3000, () => {
    console.log('Listening on port 3000!')
  })
}
start()
  .then((o) => console.log('connected'))
  .catch((err) => console.log(err))
