// Imports
const router = require('express').Router()

// Get specific routes
router.use('/games', require('./games'))

// Export all routes
module.exports = router
