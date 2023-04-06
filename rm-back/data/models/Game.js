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
  rules: {
    type: [String]
  },
  owner: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    required: true
  },
  players: {
    type: [Schema.Types.ObjectId],
    required: true
  },
  characters: {
    type: [Schema.Types.ObjectId],
    required: true
  },
  messages: {
    type: [Schema.Types.ObjectId],
    required: true
  },
  status: {
    type: [String],
    enum: ['DRAFT', 'ONLINE', 'PAUSE', 'TERMINATED', 'OPEN', 'PRIVATE'],
    required: true,
    default: ['DRAFT', 'OPEN']
  },
  illus: {
    type: [Schema.Types.ObjectId],
    ref: 'Image'
    // default: '../../assets/photos/game-default.webp'
  }
}, { timestamps: true })

module.exports = mongoose.models.Game || mongoose.model('Game', gameSchema)
