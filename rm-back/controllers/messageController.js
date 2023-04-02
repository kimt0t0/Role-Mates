// Imports
const Message = require('../data/models/Message')
const Game = require('../data/models/Game')
// const User = require('../data/models/User')

// (tools)
// const { isObjectEmpty } = require('../tools/objects')

// Controls

const createMessage = async (data) => {
  console.log('entry in controller')
  // (throw error if empty request)
  if (!data) {
    throw new Error('Data is missing')
  }
  const message = new Message(data)
  const messageSaved = await message.save()
  // (update game's message list)
  if (messageSaved.game) {
    await Game.findByIdAndUpdate(messageSaved.game,
      { $push: { messages: messageSaved._id } },
      { new: true, useFindAndModify: false })
  }
  // //   (update user's message list)
  // if (messageSaved.game) {
  //   await User.findByIdAndUpdate(messageSaved.user,
  //     { $push: { messages: messageSaved._id } },
  //     { new: true, useFindAndModify: false })
  // }
  return messageSaved
}

// Exports
module.exports = {
  createMessage
}
