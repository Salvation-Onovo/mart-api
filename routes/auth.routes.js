const { handleAdminLogin } = require('../controllers/auth.controller')

const router = require('express').Router()

// Routes
router.post("/admin/signup", handleAdminLogin)

module.exports = router