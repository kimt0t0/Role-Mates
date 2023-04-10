// Imports
const mongoose = require('mongoose')

const { Schema } = mongoose

// Schema
const characterSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name: {
    type: String,
    required: true,
    unique: true,
    min: 2,
    max: 30
  },
  description: {
    type: String,
    required: true,
    max: 500
  },
  types: {
    type: [String]
  },
  stats: {
    type: [Schema.Types.ObjectId],
    ref: 'CharStat'
  },
  abilities: {
    type: [Schema.Types.ObjectId],
    ref: 'CharAbility'
  },
  life: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: [String],
    enum: ['DRAFT', 'IN PLAY', 'ALIVE', 'DEAD', 'ARCHIVED'],
    default: 'DRAFT'
  },
  games: {
    type: [Schema.Types.ObjectId],
    ref: 'Game'
  },
  messages: {
    type: [Schema.Types.ObjectId],
    ref: 'Message'
  },
  illus: {
    type: Schema.Types.ObjectId,
    ref: 'Image'
  }
}, { timestamps: true })

// Exports
module.exports = mongoose.models.Character || mongoose.model('Character', characterSchema)
