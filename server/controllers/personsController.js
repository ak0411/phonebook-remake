const mongoose = require('mongoose')
const personSchema = require('../models/person')

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

const info = async (req, res) => {
  Person.countDocuments({}).then((count) => {
    const currentDate = new Date()
    res.send(
      `<div>
        <p>Phonebook has info for ${count} people</p>
        <p>${currentDate}</p>
      </div>`
    )
  })
}

const getAll = async (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons)
  })
}

const getById = async (req, res, next) => {
  Person.findById(req.params.id).then((person) => {
    if (person) {
      res.json(person)
    } else {
      res.status(404).end()
    }
  })
    .catch((err) => next(err))
}

const remove = async (req, res, next) => {
  Person.findByIdAndDelete(req.params.id).then(() => {
    res.status(204).end()
  })
    .catch((err) => next(err))
}

const create = async (req, res, next) => {
  const { body } = req

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then((savedPerson) => {
    res.json(savedPerson)
  })
    .catch((err) => next(err))
}

const update = async (req, res, next) => {
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
}

module.exports = {
  info,
  getAll,
  getById,
  remove,
  create,
  update
}