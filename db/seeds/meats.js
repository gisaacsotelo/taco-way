exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('meats').del()
  await knex('meats').insert([
    { meat_id: 1, meat_name: 'Chicken', meat_price: 4 },
    { meat_id: 2, meat_name: 'Beef', meat_price: 4 },
    { meat_id: 3, meat_name: 'Fish', meat_price: 4 },
    { meat_id: 4, meat_name: 'Pork', meat_price: 4 },
  ])
}
