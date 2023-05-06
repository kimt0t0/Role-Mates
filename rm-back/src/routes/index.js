// Imports
const router = require('express').Router()

// Get specific routes
router.use('/games', require('./games'))
router.use('/messages', require('./messages'))
router.use('/users', require('./users'))
router.use('/characters', require('./charaters'))
router.use('/images', require('./images'))
router.use('/auth', require('./auth'))
router.use('/me', require('./me'))

// Export all routes
module.exports = router
