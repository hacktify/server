<<<<<<< HEAD
module.exports = (err, req, res, next) =>{
    switch (err.code) {
        case 400:
            res.status(400).json(err.message)
            break;
        case 401:
            res.status(401).json(err.message)
            break;
        case 403:
            res.status(403).json(err.message)
            break;
        case 404:
            res.status(404).json(err.message)
            break;
        default:
            res.status(500).json(err.message)
            break;
    }
}
=======
module.exports = function (err, req, res, next){
  console.log('masuk error handling')
  console.log(err)

  if (err.name === "validationError"){
    let status = 400
    let message = err.message
    res.status(status).json({message: message})
  }
  else {
    let status = err.status || err.code || 500
    let message = err.message || 'internal server error'
    res.status(status).json({message: message})
  }
}
>>>>>>> audio create done
