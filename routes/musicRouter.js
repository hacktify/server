const router = require('express').Router()
const MusicController = require('../controllers/MusicController')
const file = require('../helpers/file')
const authentication = require('../middlewares/authentication')

router.get('/allMusic', MusicController.getAllMusic)
router.use(authentication)
router.post('/create', file.multer.single('file'), file.sendUploadToGCS, MusicController.create)
router.get('/myMusic', MusicController.getOwnerMusic)
router.get('/song', MusicController.findOneMusic)
router.delete('/:id', MusicController.delete)

module.exports = router