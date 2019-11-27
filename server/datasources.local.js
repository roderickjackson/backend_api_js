const dbUrl = require('../server/dbKey')

module.exports = {
  db: {
    host: "27017",
    url: dbUrl,
    database: "api",
    name: "db",
    connector: "mongodb"
  }
}
