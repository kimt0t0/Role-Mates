// Imports
const router = require('express').Router()
const {
  createCharacter,
  getCharacters,
  getCharacterById,
  updateCharacter,
  deleteCharacter
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
  .get(async (req, res) => {
    try {
      const characters = await getCharacters()
      return res.send(characters)
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
      const character = await getCharacterById(id)
      return res.send(character)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error.message)
    }
  })
  .patch(async (req, res) => {
    try {
      const { body } = req
      const { id } = req.params
      const character = await updateCharacter(id, body)
      return res.send(character)
    } catch (e) {
      console.error(e)
      return res.status(500).send(e.message)
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params
      await deleteCharacter(id)
      return res.send(`Lae personnage avec l'identifiant ${id} a été supprimae`)
    } catch (e) {
      console.error(e)
      return res.status(500).send(e.message)
    }
  })

// Exports
module.exports = router
