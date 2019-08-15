<<<<<<< HEAD
const { verify } = require('../helpers/jwt')

module.exports = (req, res, next) => {
    if(req.headers.token){
        let decoded = verify(req.headers.token)
        if(decoded !== Error){
            req.headers.decoded = decoded
            next()
        } else{
            next({ code: 401, message: 'Invalid Token' })
        }
    }else{
        next({ code: 400, message: 'No token'})
    }
=======
const {verifyToken} = require('../helpers/jwt')

module.exports = {
  authentication(req, res, next){
    if (req.headers.token){
      try{
        let decode = verifyToken(req.headers.token)
        req.decode = decode
        next()
      }
      catch (err) {
        next({status:401, message: "invalid token", err:err})
      }
    }
    else{
      next({status:401, message: "please login first"})
    }
  }
>>>>>>> audio create done
}