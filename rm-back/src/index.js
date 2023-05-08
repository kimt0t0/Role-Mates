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

// Cross origin
const corsOptions = {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE']
}
// or try origin: `http://localhost:${apiPort}`
app.use(cors(corsOptions))
// app.options('*', cors())

// app.use((req, res, next) => {
//   res.set('Access-Control-Allow-Origin', `http://localhost:${apiPort}`)
//   res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
//   res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
//   next()
// })
// Morgan logger middleware
app.use(morgan('dev'))
// Helmet adds 9 security middlewares
  .use(helmet())
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
