const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAllMeats(db = connection) {
  return db('meats').select()
}

function getAllVeggies(db = connection) {
  return db('veggies').select()
}

function getAllSauces(db = connection) {
  return db('sauces').select()
}

function getMeatById(id, db = connection) {
  return db('meats').where('meat_id', id)
  .first()
  .select()
}

function getVeggiesById(id, db = connection) {
  return db('veggies').where('veg_id', id)
  .first()
  .select()
}

function getSaucesById(id, db = connection) {
  return db('sauces').where('sauce_id', id)
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
