// Imports
const mongoose = require('mongoose')

// Toggle Mongoose strict mode
// (avoids Mongoose to return all documents when query filter is empty)
mongoose.set('strictQuery', false)

const connect = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}?retryWrites=true&w=majority`)
    console.log('Database connected !')
  } catch (e) {
    console.error('Error while connecting to database: ' + JSON.stringify(e))
  }
}

module.exports = {
  connect
}
