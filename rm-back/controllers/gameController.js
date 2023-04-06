// Imports
// (models)
const Game = require('../data/models/Game')
const User = require('../data/models/User')

// (tools)
// const { isObjectEmpty } = require('../tools/objects')

// Controls
const createGame = async (data) => {
  // (throw error if empty request)
  if (!data) {
    throw new Error('Data is missing')
  }
  const game = new Game(data)
  const gameSaved = await game.save()

  // update user's owned games list
  if (gameSaved.owner) {
    await User.findByIdAndUpdate(gameSaved.owner,
      { $push: { gamesOwned: gameSaved._id, unique: true } },
      { new: true, useFindAndModify: false })
  }

  return gameSaved
}

const getGames = async () => {
  const games = await Game.find()
  return games
}

const getGameById = async (id) => {
  const game = await Game.findById(id)
  return game
}

const updateGame = async (id, game) => {
  if (!id) {
    throw new Error('missing data')
  }
  if (!game) {
    throw new Error('missing game data')
  }

  delete game.owner // prevents user to change username
  const gameUpdate = await Game.findByIdAndUpdate(id, game, { new: true })

  const gameObject = gameUpdate.toObject()

  return gameObject
}

// Exports
module.exports = {
  createGame,
  getGames,
  getGameById,
  updateGame
}
