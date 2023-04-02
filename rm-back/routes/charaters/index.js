// Imports
const router = require('express').Router()
const {
  createCharacter
} = require('../../controllers/characterController')

// ROUTE '/'
router.route('/')
  .post(async (req, res) => {
    try {
      const { body } = req
      const message = await createCharacter(body)
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
