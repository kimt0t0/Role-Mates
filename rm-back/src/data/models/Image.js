// Imports
const mongoose = require('mongoose')
const { Schema } = mongoose

// Schema
const imageSchema = new Schema({
  fileName: {
    type: String
  },
  originalName: {
    type: String
  },
  mimeType: {
    type: String
  },
  url: {
    type: String
  },
  path: {
    type: String
  },
  size: {
    type: Number,
    max: 5000 // limit size to avoid full server
  }
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  // game: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Game'
  // },
  // character: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Character'
  // },
  // message: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Message'
  // }
}, { timestamps: true })

// Exports
module.exports = mongoose.models.Image || mongoose.model('Image', imageSchema)
