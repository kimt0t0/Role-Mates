// Imports
const router = require('express').Router()
const { createGame } = require('../../controllers/gameController')

// ROUTE '/'
router.route('/')
  .post(async (req, res) => {
    try {
      const { body } = req
      const game = await createGame(body)
      return res.send(game)
    } catch (e) {
      return res.status(500).send(e.message)
    }
  })

// ROUTE '/:id'

// Export
module.exports = router
