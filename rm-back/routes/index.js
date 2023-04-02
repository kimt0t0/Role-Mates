// Imports
const router = require('express').Router()

// Get specific routes
router.use('/games', require('./games'))
router.use('/messages', require('./messages'))
router.use('/users', require('./users'))
router.use('/characters', require('./charaters'))

// Export all routes
module.exports = router
