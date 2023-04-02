// Imports
const mongoose = require('mongoose')

const { Schema } = mongoose

// Schema
const userSchema = new Schema({
  pseudo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+@.+\..+/
  },
  password: {
    type: String,
    required: true
  },
  games: {
    type: [String]
  },
  messages: {
    type: [String]
  },
  modMessages: { // messages user can moderate
    type: [String]
  },
  characters: {
    type: [String]
  },
  type: { // user roles
    type: String,
    enum: ['CLASSIC', 'MOD', 'ADMIN'],
    default: 'CLASSIC'
  }
})

// Exports
module.exports = mongoose.models.User || mongoose.model('User', userSchema)
