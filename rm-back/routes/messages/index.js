// Imports
const router = require('express').Router()
const {
  createMessage
} = require('../../controllers/messageController')

// ROUTE '/'
router.route('/')
  .post(async (req, res) => {
    try {
      const { body } = req
      const message = await createMessage(body)
      return res.send(message)
    } catch (e) {
      console.error(e)
      return res.status(500).send(e.message)
    }
  })

// ROUTE '/:gameId

// ROUTE '/:userId'

// Exports
module.exports = router