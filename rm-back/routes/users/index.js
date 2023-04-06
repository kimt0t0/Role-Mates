// Imports
const router = require('express').Router()
const {
  createUser,
  getUsers,
  getUserById
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
    } catch (error) {
      console.error(error)
      return res.status(500).send(error.message)
    }
  })

// Exports
module.exports = router
