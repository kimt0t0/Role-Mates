// Imports
require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

// Init app
const app = express()
// Set port
const port = process.env.port || 3000

// Morgan logger middleware
app.use(morgan('dev'))
// Helmet adds 9 security middlewares
  .use(helmet())
// Cross origin
  .use(cors())
// Set Express params for body and JSON
  .use(express.urlencoded({ extended: true }))
  .use(express.json())

// Call MongoDB connection helper
require('./data/helpers/db').connect()

// Get routes
app.use(require('./routes'))

// Set app listening on port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
