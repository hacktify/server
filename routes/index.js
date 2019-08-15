const router = require('express').Router()
const uploadRouter = require('./musicRouter')
const userRoutes = require('./user')


router.use('/musics', uploadRouter)
router.use('/users', userRoutes)

module.exports = router