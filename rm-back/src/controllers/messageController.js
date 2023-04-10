// IMPORTS
const Message = require('../data/models/Message')
const Game = require('../data/models/Game')
const User = require('../data/models/User')
const Character = require('../data/models/Character')

// (tools)
// const { isObjectEmpty } = require('../tools/objects')

// CONTROLS
// Create Message
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

// Get all messages
const getMessages = async () => {
  const messages = await Message.find()
  return messages
}

// Get one message
const getMessageById = async (id) => {
  const message = await Message.findById(id)
  return message
}

// Update message
const updateMessage = async (id, message) => {
  if (!id) {
    throw new Error('missing data')
  }
  if (!message) {
    throw new Error('message empty or missing')
  }

  const messageUpdate = await Message.findByIdAndUpdate(id, message, { new: true })

  const messageObject = messageUpdate.toObject()

  return messageObject
}

// Delete message
const deleteMessage = async (id) => {
  if (!id) {
    throw new Error('missing data')
  }
  // (Update other datas)
  const message = await getMessageById(id)
  // Remove from game/other
  if (message.game) {
    await Game.findByIdAndUpdate(message.game,
      { $pull: { messages: id, unique: true } },
      { new: true, useFindAndModify: false })
  }
  // Remove from user
  if (message.user) {
    await User.findByIdAndUpdate(message.user,
      { $pull: { messages: id, unique: true } },
      { new: true, useFindAndModify: false })
  }
  // Remove from character
  if (message.character) {
    await Character.findByIdAndUpdate(message.character,
      { $pull: { messages: id, unique: true } },
      { new: true, useFindAndModify: false })
  }
  // (Delete message from db)
  await Message.findByIdAndDelete(id)
}

// EXPORTS
module.exports = {
  createMessage,
  getMessages,
  getMessageById,
  updateMessage,
  deleteMessage
}
