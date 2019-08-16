const router = require('express').Router()
const userRoutes = require('./user')
const uploadRouter = require('./musicRouter')

router.use('/users', userRoutes)
router.use('/musics', uploadRouter)

module.exports = router