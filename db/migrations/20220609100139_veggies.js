exports.up = function (knex) {
  return knex.schema.createTable('veggies', (table) => {
    table.increments('veg_id')
    table.string('veg_name')
    table.integer('veg_price')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('veggies')
}
