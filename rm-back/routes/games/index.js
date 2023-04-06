// Imports
const router = require('express').Router()
const {
  createGame,
  getGames
} = require('../../controllers/gameController')

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
  .get(async (req, res) => {
    try {
      const games = await getGames()
      return res.send(games)
    } catch (e) {
      console.error(e)
      return res.status(500).send(e.message)
    }
  })

// ROUTE '/:id'

// Export
module.exports = router
