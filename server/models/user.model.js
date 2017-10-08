'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    minlength: 4,
    trim: true
  }
})

mongoose.model('User', UserSchema)
