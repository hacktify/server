<<<<<<< HEAD
const bcryptjs = require('bcryptjs')

module.exports = {
    encrypt(password) {
        return bcryptjs.hashSync(password, 15)
    },
    compare(password, hash) {
        return bcryptjs.compareSync(password, hash)
    } 
=======
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET

module.exports = {
  generateToken(payload){
    return jwt.sign(payload, secret, {expiresIn: 3600 * 60});
  },
  
  verifyToken(token){
    return jwt.verify(token,secret)
  }
>>>>>>> audio create done
}