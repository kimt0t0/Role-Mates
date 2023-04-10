const mongoose = require('mongoose')

const { Schema } = mongoose

const charAbilitySchema = new Schema({
  name: {
    type: String,
    min: 2,
    max: 15,
    required: true
  },
  type: {
    type: String,
    min: 2,
    max: 25
  },
  amount: {
    type: Number,
    min: 0,
    max: 10
  },
  desription: {
    type: String,
    max: 200
  }
})

module.exports = mongoose.models.CharAbility || mongoose.model('CharAbility', charAbilitySchema)
