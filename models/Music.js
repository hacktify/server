const mongoose = require('mongoose')
const Schema = mongoose.Schema

let MusicSchema = new Schema ({
  title: {
    type: String,
    required: [true, "name cannot be empty"]
  },
  lyrics: {
    type: String,
  },
  color:{
    type: String,
  },
  fileUrl:{
    type: String,
    required: [true, "image cannot be empty"]
  },
  UserId:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
},{timestamps: true})

let Music = mongoose.model('Music', MusicSchema)

module.exports = Music