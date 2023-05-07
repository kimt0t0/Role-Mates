// IMPORTS
const router = require('express').Router()
const jwt = require('jsonwebtoken')

const {
  getUserById
} = require('../../controllers/userController')

// LOGIC
router.route('/')
  .get(async (req, res) => {
    if (req.headers.authorization) {
      try {
        const authHeader = req.headers.authorization
        if (authHeader.startsWith('Bearer')) {
          const token = authHeader.split(' ')[1]
          const decoded = await jwt.verify(JSON.parse(token).token, process.env.TOKEN_SECRET)
          if (decoded && decoded.id) {
            try {
              const userId = decoded.id
              const user = await getUserById(userId)
              return res.send(user)
            } catch (e) {
              return res.status(500).send(e.message)
            }
          } else {
            return res.status(401).send()
          }
        } else {
          return res.status(401).send()
        }
      } catch (e) {
        return res.status(401).send(e)
      }
    } else {
      return res.status(401).send()
    }
  })

module.exports = router
