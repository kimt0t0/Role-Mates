// Imports
const router = require('express').Router()

// Get specific routes
router.use('/games', require('./games'))
router.use('/messages', require('./messages'))

// Export all routes
module.exports = router
