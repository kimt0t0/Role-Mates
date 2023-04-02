// Imports
const mongoose = require('mongoose')

const { Schema } = mongoose

// Schema
const characterSchema = new Schema({
  user: {
    type: String,
    required: true
    // ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  types: {
    type: [String]
  },
  stats: {
    type: [Object]
    // ref: 'CharStats'
  },
  abilities: {
    type: [Object]
    // ref: 'CharAbilities'
  },
  life: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['DRAFT', 'IN PLAY', 'DEAD', 'ARCHIVED'],
    default: 'DRAFT'
  },
  games: {
    type: [String]
  },
  messages: {
    type: [String]
  },
  illus: {
    type: String
    // ref: 'Image'
  }
}, { timestamps: true })

// Exports
module.exports = mongoose.models.Character || mongoose.model('Character', characterSchema)
