const router = require('express').Router()
const UserController = require('../controllers/user')

router.post('/register', UserController.signUp)
router.post('/login', UserController.signIn)

module.exports = router