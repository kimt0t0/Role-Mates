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
    type: [Schema.Types.ObjectId],
    required: true
  },
  moderators: {
    type: [Schema.Types.ObjectId],
    required: true,
    default: ['global admin']
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
    type: [Schema.Types.ObjectId],
    required: true,
    default: ['online', 'open']
  },
  illus: {
    type: String,
    default: '../../assets/photos/game-default.webp'
  },
  creator: {
    type: Schema.Types.ObjectId,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.models.Game || mongoose.model('Game', gameSchema)
