'use strict'

require('./server/init')
const config = require('./config')
const glob = require('glob')
const express = require('express')

require('./server/mongoose')
let models = glob.sync('./server/models/*.js')
models.forEach(function (model) {
  require(model)
})

let app = express()
app = require('./server/express').init(app)

const port = process.env.PORT || config.dev.port

let routes = glob.sync('./server/routes/*.js')
routes.forEach(function (route) {
  require(route)(app)
})

app.use(express.static('dist'))

app.listen(port, function () {
  console.log(`Express server listening on port ${port}`)
})
