exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('veggies').del()
  await knex('veggies').insert([
    { veg_id: 1, veg_name: 'Mushroom', veg_price: 1 },
    { veg_id: 2, veg_name: 'Potato', veg_price: 1 },
    { veg_id: 3, veg_name: 'Zucchini', veg_price: 1 },
    { veg_id: 4, veg_name: 'Bell Pepper', veg_price: 1 },
  ])
}
