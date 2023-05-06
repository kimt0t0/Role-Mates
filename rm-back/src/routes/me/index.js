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
    //   console.log(req.headers.authorization)
      try {
        const authHeader = req.headers.authorization
        if (authHeader.startsWith('Bearer')) {
          const token = authHeader // .split(' ')[1].split(',')[0].split(':')[1]
          console.log(token)
          const decoded = await jwt.verify(token, process.env.TOKEN_SECRET)
          console.log(decoded)
          if (decoded && decoded.id) {
            const userId = decoded.id
            getUserById(userId)
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
