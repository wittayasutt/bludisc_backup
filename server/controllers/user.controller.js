'use strict'

const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.add = (req, res) => {
  let user = new User({
    email: req.body.email
  })

  user.save().then(user => {
    res.send(user)
  }, e => {
    res.status(400).send(e)
  })
}

exports.show = (req, res) => {
  User.find().then(
    user => {
      res.send({ user })
    },
    e => {
      res.status(400).send(e)
    }
  )
}
