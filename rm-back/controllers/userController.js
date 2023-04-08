// IMPORTS
const User = require('../data/models/User')
const Game = require('../data/models/Game')
// const Message = require('../data/models/Message')
const { deleteMessage } = require('./messageController')
const { deleteCharacter } = require('./characterController')
const { deleteGame } = require('./gameController')

// (tools)
// const { isObjectEmpty } = require('../tools/objects')

// CONTROLS
// Create User
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

// Get all users
const getUsers = async () => {
  const users = await User.find().select('-password').select('-email')
  return users
}

// Get users by search
const getUsersByTextSearch = async (search) => {
  const users = await User.find({
    $text:
    {
      $search: search,
      $language: 'fr',
      $caseSensitive: false
    }
  })
  return users
}

// Get one user
const getUserById = async (id) => {
  const user = await User.findById(id).select('-password').select('-email')
  return user
}

// Update user
const updateUser = async (id, user) => {
  if (!id) {
    throw new Error('missing data')
  }
  if (!user) {
    throw new Error('missing user')
  }

  delete user.username // prevents user to change username
  const userUpdate = await User.findByIdAndUpdate(id, user, { new: true }).select('-password')

  const userObject = userUpdate.toObject()

  return userObject
}

// Delete user
const deleteUser = async (id) => {
  if (!id) {
    throw new Error('missing data')
  }
  // (Update other datas)
  const user = await getUserById(id)
  // ((remove messages))
  if (user.messages.length > 0) {
    user.messages.forEach(async m => await deleteMessage(m))
  }
  // ((remove owned games))
  if (user.gamesOwned.length > 0) {
    user.gamesOwned.forEach(async go => await deleteGame(go))
  }
  // ((remove characters))
  if (user.characters.length > 0) {
    user.characters.forEach(async c => await deleteCharacter(c))
  }
  // ((remove user from games))
  if (user.games.length > 0) {
    user.games.forEach(async g => {
      await Game.findByIdAndUpdate(g,
        { $pull: { players: id, unique: true } },
        { new: true, useFindAndModify: false })
    })
  }
  // (Delete user from db)
  await User.findByIdAndDelete(id)
}

// EXPORTS
module.exports = {
  createUser,
  getUsers,
  getUsersByTextSearch,
  getUserById,
  updateUser,
  deleteUser
}
