// Imports
const mongoose = require('mongoose')
const { Schema } = mongoose

const gameSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  players: {
    type: [],
    required: true
  },
  moderators: {
    type: [],
    required: true
  },
  characters: {
    type: [],
    required: true
  },
  messages: {
    type: [],
    required: true
  },
  status: {
    type: [],
    required: true
  },
  illus: {
    type: String
  },
  creator: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.models.Game || mongoose.model('Game', gameSchema)
