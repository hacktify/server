const router = require('express').Router()
const MusicController = require('../controllers/MusicController')
const file = require('../helpers/file')
const authentication = require('../middlewares/authentication')

router.post('/create', file.multer.single('file'), file.sendUploadToGCS, MusicController.create)
router.delete('/:id', MusicController.delete)

module.exports = router