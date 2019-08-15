const { compare } = require("../helpers/bcryptjs")
const { sign } = require("../helpers/jwt")
const User = require("../models/user")

module.exports = class UserController {
  static signUp(req, res, next) {
    const { email, password } = req.body

    User.create({ email, password })
      .then( user => {
          res.status(201).json(user)
      })
      .catch(next);
  }

  static signIn(req, res, next) {
    let payload = {}, token = '';
    const { email, password } = req.body
    User.findOne({ email: email })
      .then(user => {
        if (user) {
          if (compare(password, user.password)) {
            payload._id = user._id
            payload.email = user.email
            payload.username = user.username

            token = sign(payload);
            res.status(200).json({ access_token: token, username: payload.username });
          } else {
            next({ code: 400, message: "Wrong email/password" })  
          }
        } else {
          next({ code: 400, message: "Wrong email/password" })
        }

      })
      .catch(next);
  }
};
