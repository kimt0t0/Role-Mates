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
    // update user's games list
    if (characterSaved.games) {
      await User.findByIdAndUpdate(characterSaved.user,
        { $push: { games: { $each: characterSaved.games } } },
        { new: true, useFindAndModify: false })
    }
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

const getCharacters = async () => {
  const characters = await Character.find()
  return characters
}

const getCharacterById = async (id) => {
  const character = await Character.findById(id)
  return character
}

const updateCharacter = async (id, character) => {
  if (!id) {
    throw new Error('missing data')
  }
  if (!character) {
    throw new Error('missing character data')
  }

  const characterUpdate = await Character.findByIdAndUpdate(id, character, { new: true })

  const characterObject = characterUpdate.toObject()

  return characterObject
}

// Exports
module.exports = {
  createCharacter,
  getCharacters,
  getCharacterById,
  updateCharacter
}
