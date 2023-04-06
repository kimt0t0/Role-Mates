// Imports
const router = require('express').Router()
const {
  createGame,
  getGames,
  getGameById,
  updateGame
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
router.route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params
      const game = await getGameById(id)
      return res.send(game)
    } catch (e) {
      console.error(e)
      return res.status(500).send(e.message)
    }
  })
  .patch(async (req, res) => {
    try {
      const { body } = req
      const { id } = req.params
      const game = await updateGame(id, body)
      return res.send(game)
    } catch (e) {
      console.error(e)
      return res.status(500).send(e.message)
    }
  })

// Export
module.exports = router
