const config = require('../config')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
if (!process.env.MONGODB_URI) {
  process.env.MONGODB_URI = (process.env.NODE_ENV === JSON.parse(config.dev.env.NODE_ENV)) ? config.dev.db : config.test.db
}
