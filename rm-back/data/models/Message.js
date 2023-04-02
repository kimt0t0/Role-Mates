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
  character: {
    type: String
    // ref: 'Character'
  },
  type: {
    type: String,
    enum: ['MJ', 'CHARPLAY', 'DISC', 'MOD'], // game master / character play / discussion / moderation
    default: 'CHARPLAY'
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
    required: true,
    default: 'admin'
    // ref: 'User
  }
}, { timestamps: true })

// Exports
module.exports = mongoose.models.Message || mongoose.model('Message', messageSchema)
