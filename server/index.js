const express = require('express')
const cors = require('cors')
const routes = require('@util/routes')
const errorMiddleware = require('@middleware/errorMiddleware')
const loggerMiddleware = require('@middleware/loggerMiddleware')
const personSchema = require('./models/person')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB: ', error.message)
  })

const Person = mongoose.model('Person', personSchema) */

const app = express()

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(cors())
app.use(express.json())
app.use(loggerMiddleware())

app.use(routes)

app.use(unknownEndpoint)
app.use(errorMiddleware)

module.exports = app
