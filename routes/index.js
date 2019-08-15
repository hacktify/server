const router = require('express').Router()
const userRoutes = require('./user')

router.use('/users', userRoutes)
const uploadRouter = require('./musicRouter')

router.use('/musics', uploadRouter)

module.exports = router