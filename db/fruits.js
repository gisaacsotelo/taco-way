const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAllFruits(db = connection) {
  return db('fruits')
    .select()
}

module.exports = {
  getAllFruits,
}
