// Imports
const router = require('express').Router()
const {
  createMessage,
  getMessages,
  getMessageById,
  updateMessage,
  deleteMessage
} = require('../../controllers/messageController')
// const { withAuth } = require('../../middlewares/auth')

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
  .get(async (req, res) => {
    try {
      const users = await getMessages()
      return res.send(users)
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
      const message = await getMessageById(id)
      return res.send(message)
    } catch (e) {
      console.error(e)
      return res.status(500).send(e.message)
    }
  })
  .patch(async (req, res) => {
    try {
      const { body } = req
      const { id } = req.params
      const message = await updateMessage(id, body)
      return res.send(message)
    } catch (e) {
      console.error(e)
      return res.status(500).send(e.message)
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params
      await deleteMessage(id)
      return res.send(`Le message avec l'identifiant ${id} a été supprimae`)
    } catch (e) {
      console.error(e)
      return res.status(500).send(e.message)
    }
  })

// Exports
module.exports = router
