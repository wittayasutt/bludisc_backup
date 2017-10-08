'use strict'

const bodyParser = require('body-parser')
const methodOverride = require('method-override')

module.exports.initMiddleware = function (app) {
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json())
  app.use(methodOverride())
}

module.exports.init = (app) => {
  this.initMiddleware(app)

  return app
}
