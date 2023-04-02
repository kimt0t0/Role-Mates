// Imports
const Character = require('../data/models/Character')
const Game = require('../data/models/Game')
const User = require('../data/models/User')
// const Message = require('../data/models/Message')
// const Game = require('../data/models/Game')

// (tools)
// const { isObjectEmpty } = require('../tools/objects')

// Controls

const createCharacter = async (data) => {
  // (throw error if empty request)
  if (!data) {
    throw new Error('Data is missing')
  }
  const character = new Character(data)
  const characterSaved = await character.save()

  //   update user's characters list
  if (characterSaved.user) {
    await User.findByIdAndUpdate(characterSaved.user,
      { $push: { characters: characterSaved._id, unique: true } },
      { new: true, useFindAndModify: false })
  }

  // (update game's characters list)
  if (characterSaved.games) {
    characterSaved.games.forEach(async g => {
      await Game.findByIdAndUpdate(g,
        { $push: { characters: characterSaved._id, unique: true } },
        { new: true, useFindAndModify: false })
    })
  }

  return characterSaved
}

// Exports
module.exports = {
  createCharacter
}
