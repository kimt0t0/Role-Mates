// IMPORTS
const jwt = require('jsonwebtoken')

// LOGIC
// check user access to protected routes
const withAuth = async (req, res, next) => {
  if (req.headers.authorization) {
    try {
      const decoded = await jwt.verify(req.headers.authorization.split(' ')[1], process.env.TOKEN_SECRET)
      if (decoded && decoded.id) {
        req.userId = decoded.id
        next()
      } else {
        return res.status(401).send()
      }
    } catch (e) {
      return res.status(401).send(e)
    }
  } else {
    return res.status(401).send()
  }
}

// check admin only access
const adminOnly = async (req, res, next) => {
  if (req.headers.authorization) {
    try {
      const decoded = await jwt.verify(req.headers.authorization.split(' ')[1], process.env.TOKEN_SECRET)
      if (decoded && decoded.role && decoded.role === 'ADMIN') {
        req.userId = decoded.id
        req.isAdmin = true
        next()
      } else {
        return res.status(401).send()
      }
    } catch (e) {
      return res.status(401).send(e)
    }
  }
}

module.exports = {
  withAuth,
  adminOnly
}
