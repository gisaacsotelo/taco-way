const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAllMeats(db = connection) {
  return db('meats')
    .select()
}

function getAllVeggies(db = connection) {
  return db('veggies')
    .select()
}

function getAllSauces(db = connection) {
  return db('sauces')
    .select()
}

function getMeatById(db = connection) {
  return db('meats').where('id', id)
  .first()
  .select()
}

function getVeggiesById(db = connection) {
  return db('veggies').where('id', id)
  .first()
  .select()
}

function getSaucesById(db = connection) {
  return db('sauces').where('id', id)
  .first()
  .select()
}

module.exports = {
  getAllMeats,
  getAllVeggies,
  getAllSauces,
  getMeatById,
  getVeggiesById,
  getSaucesById,
}
