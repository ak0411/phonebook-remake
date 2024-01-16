const express = require('express')
const cors = require('cors')
const routes = require('@util/routes')
const errorMiddleware = require('@middleware/errorMiddleware')
const loggerMiddleware = require('@middleware/loggerMiddleware')

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
