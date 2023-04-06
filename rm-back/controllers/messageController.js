// Imports
const Message = require('../data/models/Message')
const Game = require('../data/models/Game')
const User = require('../data/models/User')
const Character = require('../data/models/Character')

// (tools)
// const { isObjectEmpty } = require('../tools/objects')

// Controls

const createMessage = async (data) => {
  // (throw error if empty request)
  if (!data) {
    throw new Error('Data is missing')
  }
  const message = new Message(data)
  const messageSaved = await message.save()
  // (update game's messages list)
  if (messageSaved.game) {
    await Game.findByIdAndUpdate(messageSaved.game,
      { $push: { messages: messageSaved._id } },
      { new: true, useFindAndModify: false })
  }
  //   (update user's messages list)
  if (messageSaved.user) {
    await User.findByIdAndUpdate(messageSaved.user,
      { $push: { messages: messageSaved._id } },
      { new: true, useFindAndModify: false })
  }
  // (update character's messages list)
  if (messageSaved.character) {
    await Character.findByIdAndUpdate(messageSaved.character,
      { $push: { messages: messageSaved._id } },
      { new: true, useFindAndModify: false })
  }

  return messageSaved
}

const getMessages = async () => {
  const messages = await Message.find()
  return messages
}

const getMessageById = async (id) => {
  const message = await Message.findById(id)
  return message
}

// Exports
module.exports = {
  createMessage,
  getMessages,
  getMessageById
}
