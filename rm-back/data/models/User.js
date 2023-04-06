// Imports
const mongoose = require('mongoose')

const { Schema } = mongoose

// Schema
const userSchema = new Schema({
  pseudo: {
    type: String,
    required: true,
    min: 3,
    max: 15
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+@.+\..+/,
    min: 5,
    max: 25
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 35
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
    required: true,
    default: 'CLASSIC'
  },
  avatar: {
    type: Schema.Types.ObjectId,
    ref: 'Image'
  }
})

// Exports
module.exports = mongoose.models.User || mongoose.model('User', userSchema)
