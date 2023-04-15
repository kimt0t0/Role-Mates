// IMPORTS
const router = require('express').Router()
const { dirname } = require('path')
const multer = require('multer')
const { sanatizeFilename } = require('../../tools/strings')

const { createImage } = require('../../controllers/imagesController')
const { withAuth } = require('../../middlewares/auth')

// LOGIC
// Define directory name
const appDir = dirname(require.main.filename)

// Create storage on physical device
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, appDir + '/../public/images/')
  },
  filename: (req, file, cb) => {
    const uniquePrefix = Date.now() + '_rm_' + Math.round(Math.random() * 1E6)
    cb(null, uniquePrefix + '_' + sanatizeFilename(file.originalname))
  }
})

// Limit allowed image types
// (png and bmp not allowed, too heavy)
const authorizedTypes = [
  'jpeg',
  'jpg',
  'gif',
  'webp',
  'webm'
]

// Upload middleware
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const type = file.mimetype.split('/')[1]
    if (authorizedTypes.includes(type)) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('File type must be ' + authorizedTypes))
    }
  }
})

// API Route '/'
router.route('/')
  .post(upload.single('file'), async (req, res) => {
    console.log('---------------------REQ: ', req)
    const file = req.body
    try {
      const savedImageObject = await createImage(file)
      return res.send(savedImageObject)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })

module.exports = router
