require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE1,
    "host": process.env.HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE2,
    "host": process.env.HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE3,
    "host": process.env.HOST,
    "dialect": "mysql"
  }
}
