// Imports
const router = require('express').Router()
const {
  createUser
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

// ROUTE '/:gameId

// ROUTE '/:userId'

// Exports
module.exports = router
