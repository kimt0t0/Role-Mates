// IMPORTS
const { loginUser } = require('../../controllers/authController')
const router = require('express').Router()

// LOGIC
router.route('/login')
  .post(async (req, res) => {
    const credentials = req.body
    try {
      const result = await loginUser(credentials)
      return res.send(result)
    } catch (e) {
      res.status(500).send(e)
    }
  })

// EXPORTS
module.exports = router
