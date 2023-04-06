// Imports
const mongoose = require('mongoose')

const { Schema } = mongoose

// Schema
const imageSchema = new Schema({
  fileName: {
    type: String,
    required: true
  },
  originalName: {
    type: String
  },
  mimeType: {
    type: String,
    enum: ['JPG', 'WEBP', 'PNG'],
    required: true
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
}, { timestamps: true })

// Exports
module.exports = mongoose.models.Image || mongoose.model('Image', imageSchema)
