const router = require('express').Router()

// ROUTES
const authRoute = require('./auth.routes')
router.use("/auth", authRoute)

module.exports = router