exports.up = function (knex) {
  return knex.schema.createTable('sauces', (table) => {
    table.increments('sauce_id')
    table.string('sauce_name')
    table.integer('sauce_price')
    table.string('sauce_description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('sauces')
}
