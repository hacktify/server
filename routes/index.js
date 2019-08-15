const router = require('express').Router()
const uploadRouter = require('./musicRouter')

router.use('/musics', uploadRouter)

module.exports = router