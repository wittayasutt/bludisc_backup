'use strict'

module.exports = app => {
  const user = require('../controllers/user.controller')

  app.route('/user').post(user.add)
  app.route('/user').get(user.show)
}
