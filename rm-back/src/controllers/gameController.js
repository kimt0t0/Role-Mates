// IMPORTS
// (models)
const Character = require('../data/models/Character')
const Game = require('../data/models/Game')
const User = require('../data/models/User')
const { deleteMessage } = require('./messageController')

// (tools)
// const { isObjectEmpty } = require('../tools/objects')

// CONTROLS
// Create game
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

// Get all games
const getGames = async () => {
  const games = await Game.find()
  return games
}

// Get one game
const getGameById = async (id) => {
  const game = await Game.findById(id)
  return game
}

// Update game
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

// Delete game
const deleteGame = async (id) => {
  if (!id) {
    throw new Error('missing data')
  }
  // (Update other datas)
  const game = await getGameById(id)
  // ((remove messages))
  if (game.messages.length > 0) {
    game.messages.forEach(async gm => await deleteMessage(gm))
  }
  // ((remove from characters))
  if (game.characters.length > 0) {
    game.characters.forEach(async gc => {
      await Character.findByIdAndUpdate(gc,
        { $pull: { games: id, unique: true } },
        { new: true, useFindAndModify: false })
    })
  }
  // ((remove from players))
  if (game.players.length > 0) {
    game.players.forEach(async gp => {
      await User.findByIdAndUpdate(gp,
        { $pull: { games: id, unique: true } },
        { new: true, useFindAndModify: false })
    })
  }
  // (remove from owner)
  if (game.owner.length > 0) {
    await User.findByIdAndUpdate(game.owner,
      { $pull: { gamesOwned: id, unique: true } },
      { new: true, useFindAndModify: false })
  }

  // (Delete game from db)
  await Game.findByIdAndDelete(id)
}

// EXPORTS
module.exports = {
  createGame,
  getGames,
  getGameById,
  updateGame,
  deleteGame
}
