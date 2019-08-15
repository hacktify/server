const { Schema, model } = require('mongoose')
const { encrypt } = require('../helpers/bcryptjs')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please input valid email address'],
        required: true
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.plugin(uniqueValidator);

userSchema.pre('save', function(next){
    console.log(this.password)
    this.password = encrypt(this.password)
    next()
})

module.exports = model('User', userSchema)