const Music = require('../models/Music')

class ArticleController {
  static create(req, res, next) {
    console.log('from controller - music - create')
    let { title, lyric, color } = req.body
    let fileUrl = req.file.cloudStoragePublicUrl
    let UserId = req.headers.decoded._id
    Music.create({ title, lyric, color, fileUrl, UserId})
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

  static findOneMusic(req,res,next){
    console.log('from controller - music - findOne')
    Music.find({
      title :{
        $regex: new RegExp(req.query.title,'i')
      }
    })
      .then((music)=>{
        res.status(200).json(music)
      })
      .catch(next)
  }

  static delete(req, res, next){
    console.log('from controller - music - delete')
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