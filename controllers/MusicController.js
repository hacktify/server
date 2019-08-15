const Music = require('../models/Music')

class ArticleController {
  static create(req, res, next) {
    let { title, lyric } = req.body
    let fileUrl = req.file.cloudStoragePublicUrl
    let UserId = req.headers.decoded._id
    Music.create({ title, lyric, fileUrl, UserId})
      .then((article) => {
        res.status(201).json(article)
      })
      .catch(next)
  }

  static getAllMusic(req, res, next){
    console.log('from controller - music - getAllMusic')
    Music.find()
      .then((musics)=>{
        res.status(200).json(musics)
      })
      .catch(next)
  }

  static getOwnerMusic(req,res,next){
    console.log('from controller - music - getOwnerMusic')
    Music.find({
      UserId : req.headers.decoded._id
    })
      .then((musics)=>{
        res.status(200).json(musics)
      })
      .catch(next)
  }

  static delete(req, res, next){
    Music.deleteOne({
      _id: req.params.id
    })
      .then((music)=>{
        res.status(200).json(music)
      })
      .catch(next)
  }
}

module.exports = ArticleController