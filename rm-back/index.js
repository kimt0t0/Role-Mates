// Imports
require('dotenv').config()
const express = require('express')

// Start app
const app = express()

// Set port
const port = process.env.port || 3000

// Set Express params for body and JSON
app.use(express.urlencoded({ extended: true }))
  .use(express.json())

// Call MongoDB connection helper
require('./data/helpers/db').connect()

// Test connexion
app.get('/', (req, res) => {
  res.send('Hello from Express App !')
})

// Set app listening on port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
