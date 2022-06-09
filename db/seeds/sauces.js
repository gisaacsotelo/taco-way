exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('sauces').del()
  await knex('sauces').insert([
    {
      sauce_id: 1,
      sauce_name: 'Red',
      sauce_price: 1,
      sauce_description: 'Hot',
    },
    {
      sauce_id: 2,
      sauce_name: 'Green',
      sauce_price: 1,
      sauce_description: 'Very Hot',
    },
    {
      sauce_id: 3,
      sauce_name: 'Pico de Gallo',
      sauce_price: 1,
      sauce_description: 'Not so Hot',
    },
    {
      sauce_id: 4,
      sauce_name: 'Macha',
      sauce_price: 1,
      sauce_description: 'Blow your socks off Hot',
    },
  ])
}
