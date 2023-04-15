// IMPORTS
const Image = require('../data/models/Image')

// LOGIC
// Create image
const createImage = async (image) => {
  if (!image) {
    throw new Error('Missing image file')
  }
  console.log('image from controller: ', image)

  const newImage = new Image({
    fileName: image.filename,
    originalName: image.originalname,
    mimeType: image.mimetype,
    path: image.path,
    size: image.size
  })

  const savedImage = await newImage.save()

  //   [To do: Add image to user and/or game and/or character]

  // if (savedImage) {
  //   // (user)
  //   await User.findByIdAndUpdate(userId,
  //     { $push: { images: savedImage._id } },
  //     { new: true, useFindAndModify: false })
  //   // (character)
  //   await Character.findByIdAndUpdate(charId,
  //     { $push: { images: savedImage._id } },
  //     { new: true, useFindAndModify: false })
  //   // (game)
  //   await Game.findByIdAndUpdate(gameId,
  //     { $push: { images: savedImage._id } },
  //     { new: true, useFindAndModify: false })
  //   // (message)
  //   await Message.findByIdAndUpdate(messageId,
  //     { $push: { images: savedImage._id } },
  //     { new: true, useFindAndModify: false })
  // }

  // Convert to object and return
  const savedImageObject = savedImage.toObject()
  return savedImageObject
}

// EXPORTS
module.exports = {
  createImage
}
