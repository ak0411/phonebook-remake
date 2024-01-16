require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
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

const Person = mongoose.model('Person', personSchema)

const app = express()

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  console.error(error.name)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

morgan.token('body', (req) => {
  return JSON.stringify(req.body)
})

app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/info', (req, res) => {
  Person.countDocuments({}).then((count) => {
    const currentDate = new Date()
    res.send(
      `<div>
        <p>Phonebook has info for ${count} people</p>
        <p>${currentDate}</p>
      </div>`
    )
  })
})

app.get('/persons', (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons)
  })
})

app.get('/persons/:id', (req, res, next) => {
  Person.findById(req.params.id).then((person) => {
    if (person) {
      res.json(person)
    } else {
      res.status(404).end()
    }
  })
    .catch((err) => next(err))
})

app.delete('/persons/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id).then(() => {
    res.status(204).end()
  })
    .catch((err) => next(err))
})

app.post('/persons', (req, res, next) => {
  const { body } = req

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then((savedPerson) => {
    res.json(savedPerson)
  })
    .catch((err) => next(err))
})

app.put('/persons/:id', (req, res, next) => {
  const { name, number } = req.body

  Person.findByIdAndUpdate(
    req.params.id,
    { name, number },
    { new: true, runValidators: true, context: 'query' }
  )
    .then((returnedPerson) => {
      res.json(returnedPerson)
    })
    .catch((err) => next(err))
})

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app
