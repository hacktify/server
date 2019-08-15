<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET

module.exports = {
  generateToken(payload){
    return jwt.sign(payload, secret, {expiresIn: 3600 * 60});
  },
  
  verifyToken(token){
    return jwt.verify(token,secret)
  }
=======
const bcryptjs = require('bcryptjs')

module.exports = {
    encrypt(password) {
        return bcryptjs.hashSync(password, 15)
    },
    compare(password, hash) {
        return bcryptjs.compareSync(password, hash)
    } 
>>>>>>> a74f626a82cd3c25919f29b15b36f1df14c1642f
}