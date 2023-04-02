// Imports
const mongoose = require('mongoose')

const { Schema } = mongoose

// Schema
const messageSchema = new Schema({
  game: {
    type: String,
    required: true
    // ref: 'Game'
  },
  user: {
    type: String,
    required: true
    // ref: 'User'
  },
  content: {
    type: String,
    required: true
  },
  illus: {
    type: String
    // ref: 'Image'
  },
  moderation: {
    type: [String],
    required: true
    // ref: 'User
  }
}, { timestamps: true })

// Exports
module.exports = mongoose.models.Message || mongoose.model('Message', messageSchema)
