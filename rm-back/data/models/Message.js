// Imports
const mongoose = require('mongoose')

const { Schema } = mongoose

// Schema
const messageSchema = new Schema({
  game: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Game'
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  character: {
    type: Schema.Types.ObjectId,
    ref: 'Character'
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
    type: Schema.Types.ObjectId,
    ref: 'Image'
  },
  moderation: {
    type: [Schema.Types.ObjectId],
    required: true,
    default: 'admin',
    ref: 'User'
  }
}, { timestamps: true })

// Exports
module.exports = mongoose.models.Message || mongoose.model('Message', messageSchema)
