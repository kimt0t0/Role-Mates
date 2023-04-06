// Imports
const router = require('express').Router()
const {
  createCharacter,
  getCharacters,
  getCharacterById
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

// Exports
module.exports = router
