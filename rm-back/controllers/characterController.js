// IMPORTS
const Character = require('../data/models/Character')
const Game = require('../data/models/Game')
const User = require('../data/models/User')
const { deleteMessage } = require('./messageController.js')

// (tools)
// const { isObjectEmpty } = require('../tools/objects')

// CONTROLS
// Create character
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

// Get all characters
const getCharacters = async () => {
  const characters = await Character.find()
  return characters
}

// Get one character
const getCharacterById = async (id) => {
  const character = await Character.findById(id)
  return character
}

// Update character
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

// Delete character
const deleteCharacter = async (id) => {
  if (!id) {
    throw new Error('missing data')
  }
  console.log('Suppression du personnage...')
  // (Update other datas)
  const character = await getCharacterById(id)
  console.log(character)
  // (( remove from user ))
  if (character.user) {
    await User.findByIdAndUpdate(character.user,
      { $pull: { characters: id, unique: true } },
      { new: true, useFindAndModify: false })
  }
  // (( remove from games ))
  if (character.games) {
    character.games.forEach(async g => {
      await Game.findByIdAndUpdate(g,
        { $pull: { characters: id, unique: true } },
        { new: true, useFindAndModify: false })
    })
  }
  // (( delete messages ))
  if (character.messages) {
    character.messages.forEach(async m => await deleteMessage(m))
  }
  // (Delete character from db)
  await Character.findByIdAndDelete(id)
}

// EXPORTS
module.exports = {
  createCharacter,
  getCharacters,
  getCharacterById,
  updateCharacter,
  deleteCharacter
}
