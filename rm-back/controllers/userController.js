// Imports
const User = require('../data/models/User')
const Game = require('../data/models/Game')
// const Message = require('../data/models/Message')

// (tools)
// const { isObjectEmpty } = require('../tools/objects')

// Controls
const createUser = async (data) => {
  // (throw error if empty request)
  if (!data) {
    throw new Error('Data is missing')
  }
  const user = new User(data)
  const userSaved = await user.save()
  const userObject = await userSaved.toObject()
  delete userObject.password

  // (update games' players list if user adds games when signing up)
  if (userSaved.games) {
    userSaved.games.forEach(async g => {
      await Game.findByIdAndUpdate(g,
        { $push: { players: userSaved._id, unique: true } },
        { new: true, useFindAndModify: false })
    })
  }

  return userObject
}

const getUsers = async () => {
  console.log('User controller, fonction get')
  const users = await User.find()
  // .populate('messages')
  // .populate('modMessages')
  // .populate('characters')
  // .populate('avatar')
  return users
}

// Exports
module.exports = {
  createUser,
  getUsers
}
