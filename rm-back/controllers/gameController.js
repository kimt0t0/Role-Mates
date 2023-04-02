// Imports
// (models)
const Game = require('../data/models/Game')

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
  return gameSaved
}

// Exports
module.exports = {
  createGame
}
