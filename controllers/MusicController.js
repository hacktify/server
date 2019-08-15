const Music = require('../models/Music')

class ArticleController {
  static create(req, res, next) {
    let { title, lyric } = req.body
    let fileUrl = req.file.cloudStoragePublicUrl
    // let UserId = req.decode._id
    Music.create({ title, lyric, fileUrl, })
      .then((article) => {
        res.status(201).json(article)
      })
      .catch(next)
  }

  static getAllMusic(req, res, next){
    Music.find()
      .then((musics)=>{
        res.status(200).json(musics)
      })
      .catch(next)
  }

  static delete(req, res, next){
    Music.deleteOne({
      _id: req.decode._id
    })
      .then((music)=>{
        res.status(200).json(music)
      })
      .catch(next)
  }
}

module.exports = ArticleController