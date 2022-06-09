exports.up = function (knex) {
  return knex.schema.createTable('meats', (table) => {
    table.increments('meat_id')
    table.string('meat_name')
    table.integer('meat_price')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('meats')
}
