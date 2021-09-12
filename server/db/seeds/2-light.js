exports.seed = knex => {
  return knex('light').insert([
    { id: 0, amount: 'i really don\'t mind' },
    { id: 1, amount: 'shade me baby' },
    { id: 2, amount: 'irish at a beach' },
    { id: 3, amount: 'bathe me baby' },
  ])
}
