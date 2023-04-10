// IMPORTS
const mongoose = require('mongoose')

const { Schema } = mongoose
const bcrypt = require('bcryptjs')

// SCHEMA
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 15,
    text: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+@.+\..+/,
    min: 5,
    max: 25
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 35
  },
  games: {
    type: [Schema.Types.ObjectId],
    ref: 'Game'
  },
  gamesOwned: {
    type: [Schema.Types.ObjectId],
    ref: 'Game'
  },
  messages: {
    type: [Schema.Types.ObjectId],
    ref: 'Message'
  },
  modMessages: { // messages user can moderate
    type: [Schema.Types.ObjectId],
    ref: 'Message'
  },
  characters: {
    type: [Schema.Types.ObjectId],
    ref: 'Character'
  },
  role: { // user roles
    type: String,
    enum: ['CLASSIC', 'MOD', 'ADMIN'],
    required: true,
    default: 'CLASSIC'
  },
  avatar: {
    type: Schema.Types.ObjectId,
    ref: 'Image'
  }
}, { timestamp: true })

// ADDITIONAL LOGIC
// Replace password by encrypted equivalent BEFORE saving into database
userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password') || user.isNew) {
    try {
      const salt = await bcrypt.genSalt(12)
      const hash = await bcrypt.hash(user.password, salt)
      user.password = hash
      return next()
    } catch (e) {
      throw new Error(e)
    }
  }
})

// Method to check if entered password is compatible with encrypted version
userSchema.methods.comparePassword = async function (password) {
  const isPasswordValid = await bcrypt.compare(password, this.password)
  return isPasswordValid
}

// EXPORTS
module.exports = mongoose.models.User || mongoose.model('User', userSchema)
