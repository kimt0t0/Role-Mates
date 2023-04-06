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
  owner: {
    type: [Schema.Types.ObjectId],
    required: true
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
    type: [String],
    enum: ['DRAFT', 'ONLINE', 'PAUSE', 'TERMINATED', 'OPEN', 'PRIVATE'],
    required: true,
    default: ['DRAFT', 'OPEN']
  },
  illus: {
    type: [Schema.Types.ObjectId],
    ref: 'Image'
    // default: '../../assets/photos/game-default.webp'
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.models.Game || mongoose.model('Game', gameSchema)
