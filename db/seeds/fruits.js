exports.seed = async function(knex) {
  await knex('fruits').del()
  await knex('fruits').insert([
    {id: 1, name: 'apple'},
    {id: 2, name: 'banana'},
    {id: 3, name: 'clementine'}
  ])
}
