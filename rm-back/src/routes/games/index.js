// Imports
const router = require('express').Router()
const {
  createGame,
  getGames,
  getGameById,
  updateGame,
  deleteGame
} = require('../../controllers/gameController')
const { withAuth } = require('../../middlewares/auth')

// ROUTE '/'
router.route('/')
  .post(withAuth, async (req, res) => {
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
  .get(withAuth, async (req, res) => {
    try {
      const { id } = req.params
      const game = await getGameById(id)
      return res.send(game)
    } catch (e) {
      console.error(e)
      return res.status(500).send(e.message)
    }
  })
  .patch(withAuth, async (req, res) => {
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
  .delete(withAuth, async (req, res) => {
    try {
      const { id } = req.params
      await deleteGame(id)
      return res.send(`La partie de jeu avec l'identifiant ${id} a été supprimée`)
    } catch (e) {
      console.error(e)
      return res.status(500).send(e.message)
    }
  })

// Export
module.exports = router
