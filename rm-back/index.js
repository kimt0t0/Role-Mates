// Imports
require('dotenv').config()
const express = require('express')
const cors = require('cors')

// Start app
const app = express()

// Set port
const port = process.env.port || 3000

// Cross origin
app.use(cors())
// Set Express params for body and JSON
app.use(express.urlencoded({ extended: true }))
  .use(express.json())

// Call MongoDB connection helper
require('./data/helpers/db').connect()

// Get routes
app.use(require('./routes'))

// Set app listening on port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
