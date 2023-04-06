// Imports
const router = require('express').Router()
const {
  createUser,
  getUsers,
  getUserById,
  updateUser
} = require('../../controllers/userController')

// ROUTE '/'
router.route('/')
  .post(async (req, res) => {
    try {
      const { body } = req
      const user = await createUser(body)
      return res.send(user)
    } catch (e) {
      console.error(e)
      return res.status(500).send(e.message)
    }
  })
  .get(async (req, res) => {
    try {
      const users = await getUsers()
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
      const user = await getUserById(id)
      return res.send(user)
    } catch (e) {
      console.error(e)
      return res.status(500).send(e.message)
    }
  })
  .patch(async (req, res) => {
    try {
      const { body } = req
      const { id } = req.params
      const user = await updateUser(id, body)
      return res.send(user)
    } catch (e) {
      console.error(e)
      return res.status(500).send(e.message)
    }
  })

// Exports
module.exports = router
