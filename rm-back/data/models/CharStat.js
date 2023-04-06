const mongoose = require('mongoose')

const { Schema } = mongoose

const charStatSchema = new Schema({
  name: {
    type: String,
    min: 2,
    max: 15,
    required: true
  },
  amount: {
    type: Number,
    min: 0,
    required: true
  }
})

module.exports = mongoose.models.CharStat || mongoose.model('CharStat', charStatSchema)
